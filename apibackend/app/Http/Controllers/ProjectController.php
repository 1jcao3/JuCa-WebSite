<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Project;
class ProjectController extends Controller
{
    public function index()
    {
        $projects = Project::all();
        if ($projects->isEmpty()) {
            return response()->json(['message' => 'No projects found'], 404);
        }
        // Devuelve la respuesta en formato JSON
        return response()->json($projects);
    }

    public function show($id)
    {
        return Project::findOrFail($id);
    }
}
