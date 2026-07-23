async function showX3(files){
    const fusion = await X3_6E6D_ENGINE.start(files);

    document.getElementById("x3").innerHTML = `
<h2>X3 · 6E→6D Engine</h2>

<h3>TECH</h3>
<pre>${fusion.tech}</pre>

<h3>6D‑Baum</h3>
<pre>${fusion.tree}</pre>

<h3>ROOM‑Daten</h3>
<pre>${JSON.stringify(fusion.rooms, null, 2)}</pre>

<h3>NC²‑Boxen</h3>
<pre>${JSON.stringify(fusion.boxes, null, 2)}</pre>

<h3>RESPO381‑Fusion</h3>
<pre>${JSON.stringify(fusion.respo, null, 2)}</pre>
`;
}
