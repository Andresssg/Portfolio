import Django from './Django'
import React from './React'
import Node from './Node'
import Nginx from './Nginx'
import MySql from './MySql'
import Docker from './Docker'
import Html from './Html'
import Tailwind from './Tailwind'
import SpringBoot from './SpringBoot'
import PostgreSQL from './PostgreSQL'

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
  },
  tailwind: {
    component: Tailwind,
    url: 'https://tailwindcss.com/'
  },
  html: {
    component: Html,
    url: 'https://developer.mozilla.org/es/docs/Web/HTML'
  },
  springboot: {
    component: SpringBoot,
    url: 'https://spring.io/'
  },
  postgresql: {
    component: PostgreSQL,
    url: 'https://www.postgresql.org/'
  }
}

export default ICONS
