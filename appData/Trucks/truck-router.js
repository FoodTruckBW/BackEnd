const router = require("express").Router();

const Truck = require("./truck-model.js");

router.get("/trucks", (req, res) => {
  Truck.getAllTrucks()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

router.get("/trucks/:id", (req, res) => {
  Truck.getTruckById(req.params.id)
    .then((data) => {
      if (!data.length) {
        res.status(404).json({ message: "No truck with said ID" });
      } else {
        res.status(200).json(data[0]);
      }
    })
    .catch((error) => {
      res.status(500).json({ message: error.message });
    });
});

router.post("/trucks", (req, res) => {
  Truck.create(req.body)
    .then(([id]) => {
      return Truck.getTruckById(id);
    })
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((error) => {
      res.status(500).json({ message: error.message });
    });
});

router.put("/trucks/:id", (req, res) => {
  Truck.update(req.params.id, req.body)
    .then((item) => {
      if (!item) {
        res.status(404).json({ message: "No truck with that ID" });
      } else {
        return Truck.getTruckById(req.params.id);
      }
    })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      res.status(500).json({ message: error.message });
    });
});

router.delete("/trucks/:id", (req, res) => {
  Truck.delete(req.params.id)
    .then((delPlace) => {
      if (!delPlace) {
        res.status(404).json({ message: "No truck with that ID" });
      } else {
        res.status(200).json({ message: "Truck deleted successfully" });
      }
    })
    .catch((error) => {
      res.status(500).json({ message: error.message });
    });
});

module.exports = router;
