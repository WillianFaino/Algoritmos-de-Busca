let mebefree = [[0,1,2],[3,4,5],[6,7,8]];

let count=0;



attMatriz=()=>{
	$("#cell0").text(mebefree[0][0]);
	$("#cell1").text(mebefree[0][1]);
	$("#cell2").text(mebefree[0][2]);
	$("#cell3").text(mebefree[1][0]);
	$("#cell4").text(mebefree[1][1]);
	$("#cell5").text(mebefree[1][2]);
	$("#cell6").text(mebefree[2][0]);
	$("#cell7").text(mebefree[2][1]);
	$("#cell8").text(mebefree[2][2]);
}

reset=()=>{
	mebefree = [[0,1,2],[3,4,5],[6,7,8]];
	attMatriz();
}

randomize=()=>{
	let vet = []
	
	for(i=0;i<3;i++){
		for (j=0;j<3;j++){
			mebefree[i][j]=Math.floor(Math.random()*9);
			while(vet.includes(mebefree[i][j])) mebefree[i][j]=Math.floor(Math.random()*9);
			vet.push(mebefree[i][j]);
		}
	}
	
	
	attMatriz();
}

trueRandomize=()=>{
	iterCount=0;
	$("#ic").text(0);
	mebefree = [[0,1,2],[3,4,5],[6,7,8]];
	let x=2;
	let y=2;
	
	for (i=0;i<30;i++){
		let aux = Math.floor(Math.random()*4);
		
		if(y+1<=2 && aux==0){
			let aux=mebefree[x][y+1];
			mebefree[x][y+1] = 8;
			mebefree[x][y]=aux;
			y=y+1;
		}
		else if(y-1>=0 && aux==1){
			let aux=mebefree[x][y-1];
			mebefree[x][y-1] = 8;
			mebefree[x][y]=aux;
			y=y-1;
		}

		else if(x+1<=2 && aux==2){
			let aux=mebefree[x+1][y];
			mebefree[x+1][y] = 8;
			mebefree[x][y]=aux;
			x=x+1;
		}
		else if(x-1>=0 && aux==3){
			let aux=mebefree[x-1][y];
			mebefree[x-1][y] = 8;
			mebefree[x][y]=aux;
			x=x-1;
		}
		else{
			i--;
		}
	}
	
	attMatriz();
}

verifyPos=(mat)=>{
	let vet = [[0,0],[0,1],[0,2],[1,0],[1,1],[1,2],[2,0],[2,1],[2,2]]
	let distSum=0
	
	
	for(i=0;i<3;i++){
		for (j=0;j<3;j++){
			let aux = vet[mat[i][j]];
			distSum+= Math.abs(aux[0]-i)+Math.abs(aux[1]-j);
		}
	}
	
	return distSum;
}

buscaProfunda=(iterCount, mat, lastDir)=>{
	
	let copMat0 = JSON.parse(JSON.stringify(mat));
	let copMat1 = JSON.parse(JSON.stringify(mat));
	let copMat2 = JSON.parse(JSON.stringify(mat));
	let copMat3 = JSON.parse(JSON.stringify(mat));
	let x,y;
	
	if(iterCount==50)return false;
	
	for(i=0;i<3;i++){
		for (j=0;j<3;j++){
			if(mat[i][j]==8){
				x=i;
				y=j;
			}
		}
	}
	
	if(verifyPos(mat)==0){	
		//xconsole.log("No de iterações: ", iterCount);
		$("#ic").text(iterCount);
		mebefree = JSON.parse(JSON.stringify(mat));
		attMatriz();
		count=0;
		return true;
	}
	
	if(y+1<=2 && lastDir!='e'){
		let aux=copMat0[x][y+1];
		copMat0[x][y+1] = 8;
		copMat0[x][y]=aux;
		//$("#ic").text(iterCount);
		if(buscaProfunda(iterCount+1,copMat0,'d')){return true;}
	}
	if(y-1>=0 && lastDir!='d'){
		let aux=copMat1[x][y-1];
		copMat1[x][y-1] = 8;
		copMat1[x][y]=aux;
		//$("#ic").text(iterCount);
		if(buscaProfunda(iterCount+1,copMat1,'e')){return true;}
	}

	if(x+1<=2 && lastDir!='c'){
		let aux=copMat2[x+1][y];
		copMat2[x+1][y] = 8;
		copMat2[x][y]=aux;
		//$("#ic").text(iterCount);
		if(buscaProfunda(iterCount+1,copMat2,'b')){return true;}
	}
	if(x-1>=0 && lastDir!='b'){
		let aux=copMat3[x-1][y];
		copMat3[x-1][y] = 8;
		copMat3[x][y]=aux;
		//$("#ic").text(iterCount);
		if(buscaProfunda(iterCount+1,copMat3,'c')){return true;}
	}
}

callBP=()=>{
	buscaProfunda(0,mebefree, 'n');
}

nodeMinor=(list)=>{
	let aux=[null,999999999,-1];
	
	list.forEach((node)=>{
		if(node[1]<aux[1] && node[2]>aux[2])aux=node;
	})
	
	list.splice(list.indexOf(aux), 1);
	
	return aux;
}

findEqSt=(list,no)=>{
	
	list.forEach((node)=>{
		if(no[0]==node[0]){return node;}
	})
	
	
	return null;
}

astar=()=>{
	let nodeList=[[mebefree,((verifyPos(mebefree))/2),0]];
	//console.log(nodeList);
	let nodeAtual=nodeMinor(nodeList);
	//console.log(nodeList);
	//console.log("nodeAtual:",nodeAtual);
	
	
	while(verifyPos(nodeAtual[0])!=0){
		let copMat0 = JSON.parse(JSON.stringify(nodeAtual[0]));
		let copMat1 = JSON.parse(JSON.stringify(nodeAtual[0]));
		let copMat2 = JSON.parse(JSON.stringify(nodeAtual[0]));
		let copMat3 = JSON.parse(JSON.stringify(nodeAtual[0]));
		let x,y;
				
		///console.log("nodeList:", nodeList);
		
		for(i=0;i<3;i++){
			for (j=0;j<3;j++){
				if(nodeAtual[0][i][j]==8){
					x=i;
					y=j;
				}
			}
		}
	
		if(y+1<=2){
			let aux=copMat0[x][y+1];
			copMat0[x][y+1] = 8;
			copMat0[x][y]=aux;
			let comp=[copMat0, (((verifyPos(copMat0))/2)+nodeAtual[2]+1),nodeAtual[2]+1];
			let no=findEqSt(nodeList, comp);
			if(no==null){nodeList.push(comp);}
			else if(comp[2]<no[2]){nodeList.splice(nodeList.indexOf(no),1);nodeList.push(comp);}
		}
		if(y-1>=0){
			let aux=copMat1[x][y-1];
			copMat1[x][y-1] = 8;
			copMat1[x][y]=aux;
			let comp=[copMat1, (((verifyPos(copMat0))/2)+nodeAtual[2]+1),nodeAtual[2]+1];
			let no=findEqSt(nodeList, comp);
			if(no==null){nodeList.push(comp);}
			else if(comp[2]<no[2]){nodeList.splice(nodeList.indexOf(no),1);nodeList.push(comp);}
		}
		if(x+1<=2){
			let aux=copMat2[x+1][y];
			copMat2[x+1][y] = 8;
			copMat2[x][y]=aux;
			let comp=[copMat2, (((verifyPos(copMat0))/2)+nodeAtual[2]+1),nodeAtual[2]+1];
			let no=findEqSt(nodeList, comp);
			if(no==null){nodeList.push(comp);}
			else if(comp[2]<no[2]){nodeList.splice(nodeList.indexOf(no),1);nodeList.push(comp);}
		}
		if(x-1>=0){
			let aux=copMat3[x-1][y];
			copMat3[x-1][y] = 8;
			copMat3[x][y]=aux;
			let comp=[copMat3, (((verifyPos(copMat0))/2)+nodeAtual[2]+1),nodeAtual[2]+1];
			let no=findEqSt(nodeList, comp);
			if(no==null){nodeList.push(comp);}
			else if(comp[2]<no[2]){nodeList.splice(nodeList.indexOf(no),1);nodeList.push(comp);}
		}
		
		nodeAtual=nodeMinor(nodeList);
	}
	$("#ic").text(nodeAtual[2]);
	mebefree = JSON.parse(JSON.stringify(nodeAtual[0]));
	attMatriz();
	mebefree=nodeAtual[0];
}



$(document).ready(()=>{
	//console.log(mebefree[0][1]);
	attMatriz();
	
	$(document).on("click","#aleatorizar",trueRandomize);
	$(document).on("click","#resetMatriz",reset);
	$(document).on("click","#resolverBP",callBP);
	$(document).on("click","#resolverA",astar);
});


