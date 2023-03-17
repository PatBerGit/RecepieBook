import express from "express";
import expressLayouts from "express-ejs-layouts";

const app = express();

app.set("layout", "../views/layouts/layout.ejs");
app.set("view engine", "ejs");

app.use(expressLayouts);
app.use("/static", express.static("./static"));

app.get("/"), async (req, res) => {
    res.status(200).render("home");
}