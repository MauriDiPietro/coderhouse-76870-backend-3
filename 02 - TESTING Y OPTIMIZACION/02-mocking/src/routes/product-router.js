import * as Controllers from "../controllers/product-controllers.js";
import { Router } from "express";

const router = Router();

router.get("/", Controllers.getProducts);
router.post("/", Controllers.createProductMock);

export default router;
