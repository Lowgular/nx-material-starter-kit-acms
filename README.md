# Lowgular Nx Material Starter Kit App only Component Model Service

This project was generated using [Lowgular](https://www.lowgular.io).

<p style="text-align: center;"><img src="https://avatars.githubusercontent.com/u/109138416" width="450"></p>

🔎 **Angular Code Generation made smarter...**

## Quick Start & Documentation

[Courses](https://courses.lowgular.edu.pl)

[Follow us on Linked In](https://www.linkedin.com/company/lowgular)

[Facebook](https://www.facebook.com/Lowgular/)

## How to use it?

It is super simple, just "Keep Calm and right click!"

Create New: Right click in the project tree,
selected `New` > <img src="https://avatars.githubusercontent.com/u/109138416" width="20"> `Create New...`

Access available actions: Open a file, right click in the editor and
select: <img src="https://avatars.githubusercontent.com/u/109138416" width="20">`Actions...`

[//]: # (Create Library: Right click in the project tree, selected `New` > <img src="https://avatars.githubusercontent.com/u/109138416" width="20"> `Create Library`)

## Architecture

This is a starter kit for Nx with Lowgular and Simple Architecture

It is app-only approach, meaning we create everything in `application` project type

The architecture consists of 3 main parts:

### Model

A Readonly Interface representing data fetched from backend and needed in the `Component`

### Service

Angular Injectable responsible for fetching data from backend.
You can inject `HttpClient` in it
It returns `Model`

### Component

Angular Component responsible for presenting data on a specific route.
You can inject `Service` in it
It uses `Model` to present the data

## Templates

The starter kit uses `angular components` (angular material) package.

You have templates already setup for you.

There are 2 types of templates

### Layouts

Static HTML that can be injected without any data with it

### Templates

HTML that is connected to specific data. We distinguish between properties in your components.

In order to add a template, use `Actions...` menu by right click inside any `.html` file

#### Forms

If a property is a form, it will output form fields

#### Lists

If a property is an array, it will output lists with children

#### Objects

If a property is an object, it will output properties of an object

## Plugin

### IntelliJ

Go to marketplace and search for angular, then find our logo :)

In case of trouble you can search for "lowgular" or access
this [Marketplace Link](https://plugins.jetbrains.com/plugin/19740-lowgular)

### VScode

Coming soon...

## Summary

There are endless capabilities and soon we will document most of them

Visit [Lowgular](https://www.lowgular.io/) to learn more.
