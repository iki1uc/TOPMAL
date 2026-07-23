async function showX1(files){
    const fusion = await X1_RESPO_ENGINE.start(files);

    document.getElementById("x1").innerHTML = `
<h2>X1 · RESPO381 Engine</h2>

<h3>ALL</h3>
<pre>${JSON.stringify(fusion.all, null, 2)}</pre>

<h3>VECTOR</h3>
<pre>${JSON.stringify(fusion.vector, null, 2)}</pre>

<h3>INDEX</h3>
<pre>${JSON.stringify(fusion.index, null, 2)}</pre>

<h3>RESPO381</h3>
<pre>${JSON.stringify(fusion.respo, null, 2)}</pre>

<h3>γ∞ Stabilisationsachse</h3>
<pre>${JSON.stringify(fusion.gamma, null, 2)}</pre>

<h3>TOP.respo Auswahl</h3>
<pre>${JSON.stringify(fusion.pick, null, 2)}</pre>
`;
}
