mongoimport ./clientes.json -d erp -c clientes --drop

mongoimport ./produtos.json -d erp -c produtos --drop

mongoimport ./vendas.json -d erp -c vendas --drop
