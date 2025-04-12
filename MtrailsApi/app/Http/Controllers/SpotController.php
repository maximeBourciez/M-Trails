<?php

namespace App\Http\Controllers;

use App\Models\Spot;
use App\Http\Requests\StoreSpotRequest;
use App\Http\Requests\UpdateSpotRequest;

class SpotController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $spots = Spot::all();
        return response()->json($spots);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreSpotRequest $request)
    {
        $spot = Spot::create($request->validated());
        return response()->json($spot, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(int $id)
    {
        $spot = Spot::find($id);
        if (!$spot) {
            return response()->json(['message' => 'Spot not found'], 404);
        }
        return response()->json($spot);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateSpotRequest $request, Spot $spot)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Spot $spot)
    {
        //
    }

    /**
     * Get light spots.
     */
    public function getLightSpots()
    {
        $spots = Spot::select('id', 'name')
            ->get();

        return response()->json($spots);
    }
}
