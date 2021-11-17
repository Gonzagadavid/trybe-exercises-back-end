const express = require('express');
const ProductModel = require('../models/productModel');
const Code = require('http-status-codes').StatusCodes; 

const router = express.Router();

router.get('/', async (req, res, next) => {
  const products = await ProductModel.getAll();

  if (!products.length) return res.status(Code.NOT_FOUND);
  if (products.error) return res.status(Code.INTERNAL_SERVER_ERROR)

  res.status(Code.OK).json(products);
});

router.get('/:id', async (req, res, next) => {
  const product = await ProductModel.getById(req.params.id);

  if (!products.length) return res.status(Code.NOT_FOUND);
  if (products.error) return res.status(Code.INTERNAL_SERVER_ERROR)

  res.status(Code.OK).json(product);
});

router.post('/', async (req, res) => {
  const { name, brand } = req.body;

  const newProduct = await ProductModel.add(name, brand);

  if (newProduct.error) return res.status(Code.NOT_ACCEPTABLE).json({ message: 'não adicionado'})

  res.status(Code.CREATED).json(newProduct);
});

router.delete('/:id', async (req, res) => {
  const products = await ProductModel.exclude(req.params.id);

  if (products.error) return res.status(Code.INTERNAL_SERVER_ERROR).json({ message: 'não deletado'})

  res.status(Code.MOVED_PERMANENTLY).json(products);
});

router.put('/:id', async (req, res) => {
  const { name, brand } = req.body;

  const products = await ProductModel.update(req.params.id, name, brand);

  if (products.error) return res.status(Code.NOT_MODIFIED).json({message: 'não alterado'})

  res.status(Code.OK).json(products);
});

module.exports = router;
