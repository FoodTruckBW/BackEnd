const router = require("express").Router();

const Truck = require("./truck-model.js");

router.get("/trucks", (req, res) => {
  Truck.getAllTrucks()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json({ error: error.message });
    });
});

router.get("/trucks/:id", (req, res) => {
  Truck.getTruckById(req.params.id)
    .then((data) => {
      if (!data.length) {
        res.json({ message: "no post with said id" });
      } else {
        res.json(data[0]);
      }
    })
    .catch((error) => {
      res.json({ message: error.message });
    });
});

router.post("/trucks", (req, res) => {
  Truck.create(req.body)
    .then(([id]) => {
      return Truck.getTruckById(id).first();
    })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json({ message: error.message });
    });
});

router.put("/trucks/:id", (req, res) => {
  Truck.update(req.params.id, req.body)
    .then((count) => {
      if (!count) {
        res.json({ message: "no post with that id" });
      } else {
        return Truck.getTruckById(req.params.id).first();
      }
    })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json({ message: error.message });
    });
});

router.delete("/trucks/:id", (req, res) => {
  Truck.delete(req.params.id)
    .then((delPlace) => {
      if (!delPlace) {
        res.json({ message: "no post with given id" });
      } else {
        res.json({ message: "post deleted successfully" });
      }
    })
    .catch((error) => {
      res.json({ message: error.message });
    });
});
