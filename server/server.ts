import { FalcorServer } from './falcor';
import { GraphqlServer } from './graphql';

// let falcor = new FalcorServer();
// const falcorPort: number = 8000;

// falcor.app.listen(falcorPort, ()=>{
// 	console.log(`Falcor app ready to go @ ${falcorPort}`);
// });


let graphql = new GraphqlServer();
const graphqlPort: number = 8001;

graphql.app.listen(graphqlPort, ()=>{
	console.log(`Graphql app ready to go @ ${graphqlPort}`);
});