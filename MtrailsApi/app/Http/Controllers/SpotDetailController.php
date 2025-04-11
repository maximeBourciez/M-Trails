<?php

namespace App\Http\Controllers;

use App\Models\SpotDetail;
use App\Http\Requests\StoreSpotDetailRequest;
use App\Http\Requests\UpdateSpotDetailRequest;

class SpotDetailController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $spotDetails = SpotDetail::all();
        return response()->json($spotDetails);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreSpotDetailRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(SpotDetail $spotDetail)
    {
        $spotDetail = SpotDetail::find($spotDetail->id);
        if (!$spotDetail) {
            return response()->json(['message' => 'Spot detail not found'], 404);
        }
        return response()->json($spotDetail);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(SpotDetail $spotDetail)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateSpotDetailRequest $request, SpotDetail $spotDetail)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(SpotDetail $spotDetail)
    {
        //
    }

    /**
     * Display the details of a specific spot.
     */
    public function getDetailsBySpotId($id)
    {
        $spotDetails = SpotDetail::where('spot_id', $id)->get();
        if ($spotDetails->isEmpty()) {
            return response()->json(['message' => 'No details found for this spot'], 404);
        }
        return response()->json($spotDetails);
    }
}
