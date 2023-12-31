<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="@yield('description')">    
        <title>@yield('title')</title>
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons" rel="stylesheet">
        <link rel="stylesheet" href="/assets/css/app.css?<?=time();?>"/>
        <script src="//api.bitrix24.com/api/v1/"></script>
        <script src="/assets/js/app.js?<?=time();?>"></script>
</head>
<body>@yield('body')</body>