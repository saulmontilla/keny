<?php

if (!function_exists('amount_format')) {

    function amount_format($value, $decimals = 2)
    {
        return number_format(floatval($value), 2, ',', '.');
    }
}
