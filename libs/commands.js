const utils = require('./utils');
const inquirer = require('inquirer');
const fs = require('fs');
const handlebars = require('handlebars');
const execa = require('execa');
const chalk = require('chalk');
const errors = require('./errors');
const log = require('./log');
const ncp = require('ncp').ncp;

const destroy = async (name, cmd) => {
  let rawAnswers = await inquirer.prompt({
    type: 'confirm',
    name: 'deleteComponent',
    message: chalk.red('Are you ABSOLUTELY sure you want to delete this component file?')
  });

  if(name.substr(-3) === '.js') {
    name = name.substring(0, name.length - 3);
  }

  if (rawAnswers.deleteComponent) {
    try {
      await fs.unlinkSync(`${process.cwd()}/${name}.js`);
    } catch(error) {
      errors.destroyFile(error);
      return;
    }

  }
};

const generate = async (type, name, cmd) => {
  const args = utils.cleanArgs(cmd);

  if (!name) {
    // support "rawrs g MyComponent"
    name = type;
    type = 'component';
  }

  if(!utils.hasValidArgs(type, args)) {
    return false;
  }

  if(name.substr(-3) === '.jsx') {
    name = name.substring(0, name.length - 3);
  }

  let templateFile = utils.resolveTemplateFile(type, args);

  fs.readFile(`${__dirname}/templates/${templateFile}`, 'utf8', (error, data) => {
    if (error) {
      log.danger('Could not read template file');
      return;
    }

    let template = handlebars.compile(data);
    const resourceNameArray = name.split('/');
    if (args.imports) {
      args.imports = args.imports.split("\\n");
    }

    if (args.components) {
      args.components = args.components.split(",");
    }

    if (args.content) {
      args.content = args.content.split("\\n");
    }

    args.resourceName = resourceNameArray.pop();
    let finishedTemplate = template(args);

    const writeOptions = { encoding: 'utf8', flag: 'wx' };

    fs.writeFile(`${process.cwd()}/${name}.js`, finishedTemplate, writeOptions, (error) => {
      if(error === null) {
        log.success(`Your ${type} ${name} successfully created`);
      } else {
        errors.writeGeneratedFile(error);
      }
    });
  });
}

const rawrs = (cmd) => {
  const args = utils.cleanArgs(cmd);
  const rawrsString = args.ascii ? 'RAWRS' :  '🦁'
  log.rawrs(rawrsString);
};

const create = async function(name, cmd) {
  log.rawrs('Creating...');

  try {
    const { stdout } = execa.shellSync('parcel --version');
  }
  catch(error) {
    if (error.code === 127) {
      utils.handleParcel();
      return;
    }
  }

  if (name === undefined) {

    let rawAnswers = await inquirer.prompt({
      type: 'confirm',
      name: 'rawproject',
      message: chalk.yellow('You have not entered any project name, so the project will be initialized in the current directory.')
    });

    if (!rawAnswers.rawproject) {
      log.rawrs('Closing now.');
      return;
    }
  }

  const args = utils.cleanArgs(cmd);

  if (fs.existsSync(`${process.cwd()}/${name}`)) {
    log.danger(`Directory "${name}" already exists. You cannot create a project there.`);
    return;
  }
  log.rawrs('copying app template files');

  await ncp(`${__dirname}/templates/app`, name, function (err) {
    if (err) {
      console.error(err);
      return;
    }
    log.success('done!\n\n');
    process.chdir(name);
    log.rawrs('Initializing dependency management');
    execa.shellSync('npm init -y');

    let dependencies = ['react', 'react-router-dom', 'babel-polyfill', 'styled-components'];

    if (args.redux) {
      log.rawrs('saving redux files');
      dependencies.push('redux', 'react-redux');
      ncp(`${__dirname}/templates/redux`, `${process.cwd()}/src/redux`, (error) => {
        if (error) {
          console.error(error);
        }
        log.success('Redux files added');
      });
    }

    log.rawrs('Installing code dependencies. This can take a while depending on whether NPM has cached them.');
    execa.shellSync(`npm install --save ${dependencies.join(' ')}`);
    log.success('Dependencies installed\n');
    // log.rawrs('Installing dev dependencies. This can also take a bit.');
    // execa.shellSync('npm install --save-dev es-lint, ');
    // log.success('Dev dependencies installed\n');

    if (args.git) {
      log.rawrs('initializing Git for version control');
      let moveGitFiles = true;
      try{
        execa.shellSync('git init');
      } catch(error) {
        if (error.code === 127) {
          log.warn('Git is not available. You can avoid this warning in future by using the --no-git option.');
        }
      }

      fs.copyFile(`${__dirname}/templates/gitignore.hbs`, `${process.cwd()}/.gitignore`, (error) => {
        if (error) {
          console.error(error);
          return false;
        }
        log.success('Git initialized');
      });
    }

    fs.readFile(`${__dirname}/templates/app-index.js`, 'utf8', (error, data) => {
      if (error) {
        log.danger('Could not read template file');
        return;
      }

      let template = handlebars.compile(data);
      let finishedTemplate = template(args);

      const writeOptions = { encoding: 'utf8', flag: 'wx' };

      fs.writeFile(`${process.cwd()}/src/index.js`, finishedTemplate, writeOptions, (error) => {
        if(error === null) {
          log.success(`Saved index.html successfully. That's the last step.\n\n`);
          log.rawrs(`You now just need to run "cd ${name}" and then run "parcel index.html" and your app will be running at http://localhost:1234.`);
        } else {
          log.error('An error has occured at the final step, creating the index.html file');
        }
      });
    });

  });


}

module.exports = { rawrs, generate, create, destroy };