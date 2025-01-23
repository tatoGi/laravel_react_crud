<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />

    @routes
    <script>
        window.Ziggy = {
            url: '{{ config('app.url') }}',
            port: {{ config('app.port') ?: 'null' }},
            defaults: {},
            routes: @json(config('ziggy.routes'))
        };
    </script>
    @viteReactRefresh
    @vite('resources/js/app.jsx')
    @inertiaHead
  </head>
  <body>
    @inertia
  </body>
</html>
