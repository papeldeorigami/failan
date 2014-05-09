# Failan #

## Introduction ##

This is **EXPERIMENTAL** code, not working yet!  
This is a simple failure analysis system for industrial equipments.

## Development environment setup ##

1) Install [nodejs](http://nodejs.org)


2) Install yeoman generators and deployd:

```
npm install -g generator-angular
npm install -g deployd
cd webapp
npm install
bower install
```

## Execution ##

To start the backend:
```
cd api
dpd -d
```

To start the frontend:
```
cd webapp
grunt serve
```

## Implementation details ##

* The frontend is implemented with AngularJS following the yeoman generator standards
* The backend is implemented with Deployd for the sake of simplicity and can be easily replaced with other REST implementations
* Uses [Restangular](https://github.com/mgonto/restangular) to connect to the deployd REST-style API

