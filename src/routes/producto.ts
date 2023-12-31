import { Request, Response, Application, Router } from "express";

import { ProductoController } from "../controllers/producto.controller";

export class ProductoRoutes {
    public productoController: ProductoController =  new ProductoController();

    public routes(app: Application): void {
        app.route("/productos/test").get(this.productoController.test)
        app.route("/productos").get(this.productoController.getAllProducto)
        app.route("/producto").post(this.productoController.createProducto)
        
    }
}