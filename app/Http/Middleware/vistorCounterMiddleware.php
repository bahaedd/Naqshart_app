<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Cache;

class vistorCounterMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (Cache::has('visitors-ips')) {
            $ips = Cache::get("visitors-ips");
            if (!$ips->contains($request->ip()))
                $ips->push($request->ip());
            Cache::put('visitors-ips', $ips, now()->addMinutes(2));
        } else {
            $ips = collect([$request->ip()]);
            Cache::put('visitors-ips', $ips, now()->addMinutes(2));
        }
        // dd($request->ip());
        return $next($request);
    }
}