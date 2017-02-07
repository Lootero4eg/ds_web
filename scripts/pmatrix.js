function calculateMatrix(date)
{
	var matrixData = 
	{
		character: 0,
		energy: 0,
		technical: 0,
		health: 0,
		logic: 0,
		hardwork: 0,
		luck: 0,
		duty: 0,
		memory: 0,
		sex: function(){ return this.technical + this.logic + this.luck; },
		purpose: function(){ return this.character + this.health + this.luck; },
		family: function(){ return this.energy + this.logic + this.duty; },
		habbits: function(){ return this.technical + this.hardwork + this.memory; },
		selfrating: function(){ return this.character + this.energy + this.technical; },
		workforfamily: function(){ return this.health + this.logic + this.hardwork; },
		talent: function(){ return this.luck + this.duty + this.memory; },
		spirituality: function(){ return this.character + this.logic + this.memory; }
	}
	
	var dateStr = date.getDate().toString();
	dateStr += (date.getMonth()+1).toString();
	dateStr += date.getFullYear().toString();
	var digit1 = 0;
	var digit2 = 0;
	var digit3 = 0;
	var digit4 = 0;
	for (var i = 0; i < dateStr.length; i++) 
		digit1 += parseInt(dateStr[i]);

	dateStr += digit1.toString();
	for (var i = 0; i < digit1.toString().length; i++) 
		digit2 += parseInt(digit1.toString()[i]);
	
	dateStr += digit2.toString();
	
	digit3 = digit1 - (parseInt(dateStr[0]) * 2);
	dateStr += digit3.toString();
	for (var i = 0; i < digit3.toString().length; i++) 
		digit4 += parseInt(digit3.toString()[i]);
	dateStr += digit4.toString();
	console.log(dateStr);
	for (var i = 0; i < dateStr.length; i++)
	{
		switch (dateStr[i]) {
			case "1":
				matrixData.character += 1;
			break;
			case "2":
				matrixData.energy += 1;
			break;
			case "3":
				matrixData.technical += 1;
			break;
			case "4":
				matrixData.health += 1;
			break;
			case "5":
				matrixData.logic += 1;
			break;
			case "6":
				matrixData.hardwork += 1;
			break;
			case "7":
				matrixData.luck += 1;
			break;
			case "8":
				matrixData.duty += 1;
			break;
			case "9":
				matrixData.memory += 1;
			break;
		}
	}	
	
	return matrixData;
}

function GetMatrixValue(item, count)
{
	var res = "";
	for (var i = 0; i < count; i++)
		res += item;
	
	if(count == 0)
		res = "НЕТ";
	
	return res;
}

function GetDescription(name, value)
{	
	if(value != [] && value != "" && value != "НЕТ")
	{
		var digValue = parseInt(value.length);		
		if(name == "character")
		{					
			if(digValue == 1)				
				return "Характер: Эгоистичный или безвольный.";
			if(digValue == 2)
				return "Характер: Мягкий, нормальный";
			if(digValue == 3)
				return "Характер: Золотая середина";
			if(digValue == 4)
				return "Характер: Лидер";
			if(digValue == 5)
				return "Характер: Деспот";
			if(digValue >= 6)
				return "Характер: Перебранный деспот";
		}
		if(name == "energy")
		{					
			if(digValue <= 1)				
				return "Энергия: недостаточно";
			if(digValue == 2)
				return "Энергия: нормально";
			if(digValue == 3)
				return "Энергия: Экстрасенс";
			if(digValue >= 4)
				return "Энергия: Донор";
		}
		if(name == "technical")
		{					
			if(digValue == 1)				
				return "Тех. науки: слабое стремление к тех. наукам";
			if(digValue >= 2)
				return "Тех. науки: может заниматься тех. науками";		
		}
		if(name == "health")
		{					
			if(digValue == 1)				
				return "Здоровье: дано от природы";
			if(digValue >= 2)
				return "Здоровье: здоров как бык";
		}
		if(name == "logic")
		{					
			if(digValue == 1)				
				return "Логика: есть";
			if(digValue = 2)
				return "Логика: сильная логика";
			if(digValue >= 3)
				return "Логика: яснознающий";
		}
		if(name == "hardwork")
		{					
			if(digValue == 1)				
				return "Знак труда: труд по настроению";
			if(digValue = 2)
				return "Знак труда: золотые ручки";
			if(digValue >= 3)
				return "Знак труда: Знак дьявола";
		}
		if(name == "luck")
		{					
			if(digValue == 1)				
				return "Удача: не значительная";
			if(digValue = 2)
				return "Удача: везунчик от природы";
			if(digValue >= 3)
				return "Удача: инженер своей субдьбы";
		}		
		if(name == "duty")
		{					
			if(digValue == 1)				
				return "Чувство долга: присутствует";
			if(digValue = 2)
				return "Чувство долга: добрюша";
			if(digValue >= 3)
				return "Чувство долга: нестабильное, искатель правды";
		}
		if(name == "memory")
		{					
			if(digValue == 1)				
				return "Память: бывает забывчивым";
			if(digValue = 2)
				return "Память: сильная память";
			if(digValue >= 3)
				return "Память: ясновидящий";
		}
		if(name == "sex")
		{					
			if(digValue <= 1)				
				return "Секс: холодный";
			if(digValue = 2)
				return "Секс: нормальный";
			if(digValue == 3)
				return "Секс: спонтанный";
			if(digValue == 4 && digValue == 5)
				return "Секс: как искусство";
			if(digValue >= 6)
				return "Секс: не могут жить без секса. С легка озабоченые люди";
		}
		if(name == "purpose")
		{					
			if(digValue <= 1)				
				return "Целеустремленность: не ставит перед собой цели или задачи";
			if(digValue == 2)
				return "Целеустремленность: медленно разбегается по жизни";
			if(digValue == 3)
				return "Целеустремленность: спонтанная, может менять свои цели";
			if(digValue == 4)
				return "Целеустремленность: сильная";
			if(digValue == 5)
				return "Целеустремленность: очень сильная. Обычно такие люди разбиваются в лепешку, но достигают поставленныз целей";
			if(digValue >= 6)
				return "Целеустремленность: ставят себе множество целей из-за чего может ничего не получится";
		}
		if(name == "family")
		{					
			if(digValue <= 2)				
				return "Семья: ждет предложения от других";			
			if(digValue == 3)
				return "Семья: если решается на семью, то второй половинке не надо раздумывать, а то убежит";
			if(digValue == 4)
				return "Семья: хочет создать семью. По вине этого человека брак не распадается";
			if(digValue == 5)
				return "Семья: очень сильное качество семьянина";
			if(digValue >= 6)
				return "Семья: качество семьянина ослаблено. Долго подбирает свой идеал";
		}
		if(name == "habbits")
		{					
			if(digValue <= 2)				
				return "Привычки, привязанности: легок на подъем";			
			if(digValue == 3)
				return "Привычки, привязанности: спонтанные, легко менят привычки, вещи, людей";
			if(digValue >= 4)
				return "Привычки, привязанности: очень стабильные люди";			
		}
		if(name == "spirituality")
		{					
			if(digValue <= 5)				
				return "Духовность: возростает";			
			if(digValue >= 6)
				return "Духовность: перегрузка, бездуховность, фанатизм. Могут создовать себе кумиров";			
		}
		if(name == "selfrating")
		{					
			if(digValue <= 3)				
				return "Самооценка: низкая";
			if(digValue == 4)				
				return "Самооценка: нормальная";
			if(digValue == 5)
				return "Самооценка: идеальная";
			if(digValue >= 6)
				return "Самооценка: завышенная";			
		}
		if(name == "workforfamily")
		{					
			if(digValue <= 2)				
				return "Обеспечение семьи: слабое стремление обеспечивать себя и семью";
			if(digValue == 3)
				return "Обеспечение семьи: человек хочет быстро по работать, чтобы средств хватило на какой то срок";
			if(digValue >= 4)
				return "Обеспечение семьи: маньак в обеспечении семьи";			
		}
		if(name == "talent")
		{					
			if(digValue == 1)				
				return "Талант: слабый";
			if(digValue == 2)				
				return "Талант: нормальный";
			if(digValue == 3)
				return "Талант: спонтанный";
			if(digValue == 4)
				return "Талант: развит, но не предел";
			if(digValue >= 5)
				return "Талант: очень сильный";			
		}
	}
	else
	{
		if(name == "character")
			return "Характер: безхарактерный (возможно ошибка в расчетах или 2000 года, которые сичтаются по другому)";
		if(name == "energy")
			return "Энергия: практически нет";
		if(name == "technical")			
			return "Тех. науки: нет стремления к тех. наукам";
		if(name == "health")
			return "Здоровье: слабое от природы";
		if(name == "logic")			
			return "Логика: очень слабая, как правило такие люди мечтатели";
		if(name == "hardwork")			
			return "Знак труда: нет стремления заниматься физическим трудом";
		if(name == "luck")
			return "Удача: нет котроля со стороны высщих сил. Таким людям приходится все тянуть на своем горбе";
		if(name == "duty")			
			return "Чувство долга: отсутсвует от природы. Но его можно привить воспитанием";
		if(name == "memory")
			return "Память: отсутсвует (возможно ошибка в расчетах или 2000 года, которые сичтаются по другому)";
	}
	
	return "";
}