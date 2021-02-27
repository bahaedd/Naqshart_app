<?php

namespace App\Http\Middleware;

use Closure;
use Auth;

class CheckAdmin
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
        if(Auth::check() && Auth::user()->admin_role==1)
        {
            return $next($request);
        }
        
        else if(Auth::check() && Auth::user()->admin_role==2)
        {
            return redirect('/orders');
                }else{
            Auth::logout();
            return redirect('/login');
        }



    }
}
