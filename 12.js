const X3_6E6D_ENGINE = {

    tech: "",
    tree: "",
    rooms: {},
    boxes: {},
    fusion: {},

    async start(files){

        // 1) TECH laden
        this.tech = await RAW_MASTER.loadSingle("6E_to_6D.tech");

        // 2) 6D-Baum laden
        this.tree = await RAW_MASTER.loadSingle("6D-Baum.raw");

        // 3) ROOM laden
        this.rooms = {
            D: await ROOM_MASTER.loadSingle("D.room"),
            T: await ROOM_MASTER.loadSingle("T.room"),
            ALLIN: await ROOM_MASTER.loadSingle("12e_allin_allout.room")
        };

        // 4) NC²-Boxen laden
        this.boxes = {
            lock: await RAW_MASTER.loadSingle("NC2box.lock"),
            sync: await RAW_MASTER.loadSingle("NC2box.sync"),
            dual: await RAW_MASTER.loadSingle("NC2octa2.dual"),
            merge: await RAW_MASTER.loadSingle("NC2octa2box.merge")
        };

        // 5) Fusion mit RESPO381
        this.fusion = {
            tech: this.tech,
            tree: this.tree,
            rooms: this.rooms,
            boxes: this.boxes,
            respo: RESPO381_MASTER.lastFusion
        };

        return this.fusion;
    }
};
