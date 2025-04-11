<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;
use App\Http\Requests\StoreContactRequest;

class ContactController extends Controller
{
    // Enregistrer un nouveau message
    public function store(StoreContactRequest $request)
    {
        $contact = Contact::create($request->validated());
        
        return response()->json([
            'message' => 'Message envoyé avec succès',
            'data' => $contact
        ], 201);
    }

    // Lister tous les messages (pour l'admin)
    public function index()
    {
        return Contact::orderBy('created_at', 'desc')->get();
    }

    // Marquer comme lu
    public function markAsRead($id)
    {
        $contact = Contact::findOrFail($id);
        $contact->update(['read_at' => now()]);

        return response()->json(['message' => 'Message marqué comme lu']);
    }
}