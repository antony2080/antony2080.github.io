// you can see more info at https://github.com/tschaub/gh-pages
import path from 'path';
import ghpages from 'gh-pages';

const options = {
  branch: 'gh-pages',
  repo: 'https://github.com/antony2080/antony2080.github.io.git' // project github repo
};

const callback = err => {

  if (err) console.error(err);
  else console.log('publish success');
};

/**
 * This task pushes to the `master` branch of the configured `repo`.
 */
ghpages.publish(path.resolve(path.resolve(), './dist'), options, callback);