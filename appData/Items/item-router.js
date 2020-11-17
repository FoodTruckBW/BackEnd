const router = require("express").Router();

const Item = require("./item-model.js");

router.get("/item", (req, res) => {
  Item.getItems()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

router.get("/item/:id", (req, res) => {
  Item.getItemById(req.params.id)
    .then((data) => {
      if (!data.length) {
        res.status(404).json({ message: "No Item with said ID" });
      } else {
        res.status(200).json(data[0]);
      }
    })
    .catch((error) => {
      res.status(500).json({ message: error.message });
    });
});

router.post("/item", (req, res) => {
  Item.create(req.body)
    .then(([id]) => {
      return Item.getItemById(id);
    })
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((error) => {
      res.status(500).json({ message: error.message });
    });
});

router.put("/item/:id", (req, res) => {
  Item.update(req.params.id, req.body)
    .then((item) => {
      if (!item) {
        res.status(404).json({ message: "No Item with that ID" });
      } else {
        return Item.getItemById(req.params.id);
      }
    })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      res.status(500).json({ message: error.message });
    });
});

router.delete("/item/:id", (req, res) => {
  Item.delete(req.params.id)
    .then((delPlace) => {
      if (!delPlace) {
        res.status(404).json({ message: "No Item with that ID" });
      } else {
        res.status(200).json({ message: "Item deleted successfully" });
      }
    })
    .catch((error) => {
      res.status(500).json({ message: error.message });
    });
});

module.exports = router;
