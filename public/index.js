'use strict';

//list of truckers
//useful for ALL 5 exercises
var truckers = [{
  'id': 'f944a3ff-591b-4d5b-9b67-c7e08cba9791',
  'name': 'les-routiers-bretons',
  'pricePerKm': 0.05,
  'pricePerVolume': 5
}, {
  'id': '165d65ec-5e3f-488e-b371-d56ee100aa58',
  'name': 'geodis',
  'pricePerKm': 0.1,
  'pricePerVolume': 8.5
}, {
  'id': '6e06c9c0-4ab0-4d66-8325-c5fa60187cf8',
  'name': 'xpo',
  'pricePerKm': 0.10,
  'pricePerVolume': 10
}];

//list of current shippings
//useful for ALL exercises
//The `price` is updated from exercice 1
//The `commission` is updated from exercice 3
//The `options` is useful from exercice 4
var deliveries = [{
  'id': 'bba9500c-fd9e-453f-abf1-4cd8f52af377',
  'shipper': 'bio-gourmet',
  'truckerId': 'f944a3ff-591b-4d5b-9b67-c7e08cba9791',
  'distance': 100,
  'volume': 4,
  'options': {
    'deductibleReduction': false
  },
  'price1': 0,
  'price2': 0,
  'price3': 0,
  'commission': {
  	'total1': 0,
  	'total2': 0,
  	'treasury': 0,
    'insurance': 0,
    'convargo1': 0,
    'convargo2': 0

  }
}, {
  'id': '65203b0a-a864-4dea-81e2-e389515752a8',
  'shipper': 'librairie-lu-cie',
  'truckerId': '165d65ec-5e3f-488e-b371-d56ee100aa58',
  'distance': 650,
  'volume': 12,
  'options': {
    'deductibleReduction': true
  },
  'price1': 0,
  'price2': 0,
  'price3': 0,
  'commission': {
  	'total1': 0,
  	'total2': 0,
  	'treasury': 0,
    'insurance': 0,
    'convargo1': 0,
    'convargo2': 0

  }
}, {
  'id': '94dab739-bd93-44c0-9be1-52dd07baa9f6',
  'shipper': 'otacos',
  'truckerId': '6e06c9c0-4ab0-4d66-8325-c5fa60187cf8',
  'distance': 1250,
  'volume': 30,
  'options': {
    'deductibleReduction': true
  },
  'price1': 0,
  'price2': 0,
  'price3': 0,
  'commission': {
  	'total1': 0,
  	'total2': 0,
  	'treasury': 0,
    'insurance': 0,
    'convargo1': 0,
    'convargo2': 0
  }
}];

//list of actors for payment
//useful from exercise 5
const actors = [{
  'deliveryId': 'bba9500c-fd9e-453f-abf1-4cd8f52af377',
  'payment': [{
    'who': 'shipper',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'treasury',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'convargo',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'deliveryId': '65203b0a-a864-4dea-81e2-e389515752a8',
  'payment': [{
    'who': 'shipper',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'treasury',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'convargo',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'deliveryId': '94dab739-bd93-44c0-9be1-52dd07baa9f6',
  'payment': [{
    'who': 'shipper',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'treasury',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'convargo',
    'type': 'credit',
    'amount': 0
  }]
}];

// Exercice 1

console.log('Exercice 1')

function findTrucker(idTrucker)
{
	var truck = truckers.find(function(trucker)
	{
		return trucker.id == idTrucker;
	});
	return truck;
}

function calculShippingPrice(delivery, percent) 
{
	var truck = findTrucker(delivery.truckerId);
	console.log(truck);
	var shipPrice = (truck.pricePerKm * delivery.distance) + (truck.pricePerVolume * percent * delivery.volume);
	return shipPrice; 
}

function updateShippingPrice1()
{
	deliveries.forEach(function(delivery)
	{
		delivery.price1 = calculShippingPrice(delivery, 1);
	});
}

updateShippingPrice1();

// Exercice 2

console.log('Exercice 2')

function updateShippingPrice2()
{
	deliveries.forEach(function(delivery)
	{
		if (delivery.volume < 5)
		{
			delivery.price2 = delivery.price1;
		}

		else if ((5 <= delivery.volume) && (delivery.volume < 10))
		{
			delivery.price2 = calculShippingPrice(delivery, 0.9);
		}

		else if ((10 <= delivery.volume) && (delivery.volume < 25))
		{
			delivery.price2 = calculShippingPrice(delivery, 0.7);
		}

		else if (delivery.volume >= 25)
		{
			delivery.price2 = calculShippingPrice(delivery, 0.5);
		}
	});
}

updateShippingPrice2();

// Exercice 3

console.log('Exercice 3')

function calculCommission(delivery)
{
	delivery.commission.total1 = delivery.price2 * 0.3;
	delivery.commission.insurance = delivery.commission.total1 * 0.5
	delivery.commission.treasury = Math.floor(delivery.distance / 500) + 1;
	delivery.commission.convargo1 = delivery.commission.total1 - delivery.commission.insurance - delivery.commission.treasury;
}

function updateCommission()
{
	deliveries.forEach(function(delivery)
	{
		calculCommission(delivery);
	});
}

updateCommission();

// Exercice 4

console.log("Exercice 4")

function calculShippingPriceAndCommission(delivery)
{
	if (delivery.options.deductibleReduction)
	{
		delivery.price3 = delivery.price2 + delivery.volume;
		delivery.commission.convargo2 = delivery.commission.convargo1 + delivery.volume;
		delivery.commission.total2 = delivery.commission.total1 + delivery.volume;
	}
	else
	{
		delivery.price3 = delivery.price2;
		delivery.commission.convargo2 = delivery.commission.convargo1;
		delivery.commission.total2 = delivery.commission.total1;	
	}
}

function updatePriceAndCommission()
{
	deliveries.forEach(function(delivery)
	{
		calculShippingPriceAndCommission(delivery);
	});
}

updatePriceAndCommission();

// Exercice 5

console.log("Exercice 5")

function findDeliveryActors(idDelivery)
{
	var deliveryActors = actors.find(function(actor)
	{
		return actor.deliveryId == idDelivery;
	});
	return deliveryActors;
}

function updateDeliveryActors(delivery)
{
	var deliveryActors = findDeliveryActors(delivery.id);
	deliveryActors.payment.forEach(function(actor)
	{
		if (actor.who == "shipper") 
		{
			actor.amount = actor.amount - delivery.price3;
		}
		else if (actor.who == "owner") 
		{
			actor.amount = actor.amount + delivery.price3 - delivery.commission.total2;
		}
		else if (actor.who == "insurance") 
		{
			actor.amount = actor.amount + delivery.commission.insurance;
		}
		else if (actor.who == "treasury") 
		{
			actor.amount = actor.amount + delivery.commission.treasury;
		}
		else if (actor.who == "convargo") 
		{
			actor.amount = actor.amount + delivery.commission.convargo2;
		}
	});
}

function updateActors()
{
	deliveries.forEach(function(delivery)
	{
		updateDeliveryActors(delivery);
	})
}

updateActors();



console.log(truckers);
console.log(deliveries);
console.log(actors);
