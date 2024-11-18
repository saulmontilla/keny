<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class ParseSelect2Values
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        $values = $request->all();

        foreach ($values as $key => $value) {
            if (is_array($value)) {
                if (isset($value['value']) && isset($value['label'])) {
                    $request->merge([$key => $value['value']]);
                }
            } else if (is_string($value)) {
                $json = json_decode($value);

                if ($json instanceof \stdClass) {
                    if (isset($json->value) && isset($json->label)) {
                        $request->merge([$key => $json->value]);
                    }
                }
            }
        }

        return $next($request);
    }
}
