<?php

namespace Controllers;

use Model\Dia;
use Model\Hora;
use MVC\Router;
use Model\Evento;
use Model\Ponente;
use Model\Categoria;

class PaginasController {

    public static function index(Router $router) {

        $router->render('paginas/index', [
            'titulo' => 'Inicio'
        ]);
    }

    public static function evento(Router $router) {

        $router->render('paginas/devwebcamp', [
            'titulo' => 'Sobre DevWebCamp'
        ]);
    }

    public static function paquetes(Router $router) {

        $router->render('paginas/paquetes', [
            'titulo' => 'Paquetes DevWebCamp'
        ]);
    }

    public static function conferencias(Router $router) {

        // Obtener todos los eventos
        $eventos = Evento::ordenar('hora_id', 'ASC');

        $eventos_formateados = [];
        foreach($eventos as $evento) {
            // Cruzar información del modelo para traer las tablas relacionadas
            $evento->categoria = Categoria::find($evento->categoria_id);
            $evento->dia = Dia::find($evento->dia_id);
            $evento->hora = Hora::find($evento->hora_id);
            $evento->ponente = Ponente::find($evento->ponente_id);

            // Día viernes categoría conferencias
            if($evento->dia_id === "1" && $evento->categoria_id === "1") {
                $eventos_formateados['conferencias_v'][] = $evento;
            }
            // Día sábado categoría conferencias
            if($evento->dia_id === "2" && $evento->categoria_id === "1") {
                $eventos_formateados['conferencias_s'][] = $evento;
            }

            // Día viernes categoría workshops
            if($evento->dia_id === "1" && $evento->categoria_id === "2") {
                $eventos_formateados['conferencias_v'][] = $evento;
            }
            // Día sábado categoría workshops
            if($evento->dia_id === "2" && $evento->categoria_id === "2") {
                $eventos_formateados['conferencias_s'][] = $evento;
            }
        }
        debuguear($eventos_formateados);

        $router->render('paginas/conferencias', [
            'titulo' => 'Conferencias & Workshops'
        ]);
    }

}