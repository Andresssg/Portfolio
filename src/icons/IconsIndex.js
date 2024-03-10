import Django from './Django'
import React from './React'
import Node from './Node'
import Nginx from './Nginx'
import MySql from './MySql'
import Docker from './Docker'

const ICONS = {
  django: {
    component: Django,
    url: 'https://www.djangoproject.com/'
  },
  react: {
    component: React,
    url: 'https://es.react.dev/'
  },
  node: {
    component: Node,
    url: 'https://nodejs.org/'
  },
  nginx: {
    component: Nginx,
    url: 'https://www.nginx.com/'
  },
  mysql: {
    component: MySql,
    url: 'https://www.mysql.com/'
  },
  docker: {
    component: Docker,
    url: 'https://www.docker.com/'
  }
}

export default ICONS
