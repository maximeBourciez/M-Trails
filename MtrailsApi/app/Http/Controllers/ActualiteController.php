<?php

namespace App\Http\Controllers;

use App\Models\Actualite;
use App\Http\Requests\StoreActualiteRequest;
use App\Http\Requests\UpdateActualiteRequest;

class ActualiteController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $actualites = Actualite::all();
        return response()->json($actualites);    
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreActualiteRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(int $idActu)
    {
        $actualite = Actualite::with('details')->find($idActu);

        if (!$actualite) {
            return response()->json(['message' => 'Actualité not found'], 404);
        }

        return response()->json($actualite);
    }
    


    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateActualiteRequest $request, Actualite $actualite)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Actualite $actualite)
    {
        //
    }
}
