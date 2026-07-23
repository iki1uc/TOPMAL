const X1_RESPO_ENGINE = {

    all: {},
    vector: {},
    index: {},
    respo: {},
    gamma: {},
    pick: {},

    async start(files){

        // 1) ALL laden
        this.all = ALL_HYPERRAUM.build(["AIR","HOME","REAL","USE"]);

        // 2) VECTOR laden
        this.vector = VECTOR_MASTER.start(files);

        // 3) INDEX laden
        this.index = INDEX_MASTER.start(files);

        // 4) RESPO381 erzeugen
        this.respo = RESPO381_MASTER.fuse(
            this.all,
            this.vector,
            this.index
        );

        // 5) γ∞ Stabilisationsachse
        this.gamma = GAMMA_INFINITY.stabilize(this.respo);

        // 6) TOP.respo Auswahl
        this.pick = TOP_RESPO.pick([
            "ALL","VECTOR","INDEX","NC2","6E→6D","ROOM","RAW","CSV"
        ]);

        return {
            all: this.all,
            vector: this.vector,
            index: this.index,
            respo: this.respo,
            gamma: this.gamma,
            pick: this.pick
        };
    }
};
