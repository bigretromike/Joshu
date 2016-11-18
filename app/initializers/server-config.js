export function initialize(application) {
  application.inject('component', 'cookie', 'cookie:main');
}

export default {
  name: 'server-config',
  after: ['cookie'],
  initialize: initialize
};
