const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { API_VERSION } = require("./constants");
const app = express();

/* Cargar rutas */
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const sedeRoutes = require("./routes/sede");
const addressRoutes = require("./routes/address");
const categoryRoutes = require("./routes/category");
const postRoutes = require("./routes/post");
const categoryServiceRoutes = require("./routes/categoryService");
const serviceRoutes = require("./routes/service");
const clientRoutes = require("./routes/client");
const supplierRoutes = require("./routes/supplier");
const alliesRoutes = require("./routes/ally");
const certificationsRoutes = require("./routes/certification");
const projectRoutes = require("./routes/project");
const foundationRoutes = require("./routes/foundation");
const makinaAndinaRoutes = require("./routes/makinaAndina");
const makinaAndinaMiamiRoutes = require("./routes/makinaAndinaMiami");
const glampingRoutes = require("./routes/glamping");

// Configure Body Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configure static folder
app.use(express.static("uploads"));
app.use("/uploads", express.static("uploads"));

// Configure Header HTTP - CORS
app.use(cors());

app.use(`/api/${API_VERSION}/auth`, authRoutes);
app.use(`/api/${API_VERSION}/admin/users`, userRoutes);
app.use(`/api/${API_VERSION}/admin/addresses`, addressRoutes);
app.use(`/api/${API_VERSION}/admin/sedes`, sedeRoutes);
app.use(`/api/${API_VERSION}/admin/categories`, categoryRoutes);
app.use(`/api/${API_VERSION}/admin/posts`, postRoutes);
app.use(`/api/${API_VERSION}/admin/category-services`, categoryServiceRoutes);
app.use(`/api/${API_VERSION}/admin/services`, serviceRoutes);
app.use(`/api/${API_VERSION}/admin/clients`, clientRoutes);
app.use(`/api/${API_VERSION}/admin/suppliers`, supplierRoutes);
app.use(`/api/${API_VERSION}/admin/allies`, alliesRoutes);
app.use(`/api/${API_VERSION}/admin/certifications`, certificationsRoutes);
app.use(`/api/${API_VERSION}/admin/projects`, projectRoutes);
app.use(`/api/${API_VERSION}/admin/foundations`, foundationRoutes);
app.use(`/api/${API_VERSION}/admin/makina-andina`, makinaAndinaRoutes);
app.use(`/api/${API_VERSION}/admin/makina-andina-miami`, makinaAndinaMiamiRoutes);
app.use(`/api/${API_VERSION}/admin/glamping`, glampingRoutes);

module.exports = app;
