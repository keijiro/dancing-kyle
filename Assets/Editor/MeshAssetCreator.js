#pragma strict

@MenuItem("Custom/Assets/Create Mesh (Two-Sided Quad)")
static function CreateQuad2Mesh() {
    var mesh = Mesh();
    mesh.vertices = [
        Vector3(-1, -1, 0),
        Vector3( 1, -1, 0),
        Vector3(-1,  1, 0),
        Vector3( 1,  1, 0),
        Vector3( 1,  1, 0),
        Vector3( 1, -1, 0),
        Vector3(-1,  1, 0),
        Vector3(-1, -1, 0)
    ];
    mesh.normals = [
        Vector3(0, 0,  1),
        Vector3(0, 0,  1),
        Vector3(0, 0,  1),
        Vector3(0, 0,  1),
        Vector3(0, 0, -1),
        Vector3(0, 0, -1),
        Vector3(0, 0, -1),
        Vector3(0, 0, -1)
    ];
    mesh.uv = [
        Vector2(0, 0),
        Vector2(1, 0),
        Vector2(0, 1),
        Vector2(1, 1),
        Vector2(1, 1),
        Vector2(1, 0),
        Vector2(0, 1),
        Vector2(0, 0)
    ];
    mesh.SetIndices([0, 1, 2, 2, 1, 3, 4, 5, 6, 6, 5, 7], MeshTopology.Triangles, 0);
    mesh.RecalculateBounds();
    mesh.Optimize();

    AssetDatabase.CreateAsset(mesh, "Assets/Quads.asset");
    AssetDatabase.Refresh();
}
