import { FalcorServer } from './falcor';
import { GraphqlServer } from './graphql';

const falcorPort: number = 8000;
const graphqlPort: number = 8001;

let falcor = new FalcorServer();
let graphql = new GraphqlServer();

falcor.app.listen(falcorPort, ()=>{
	console.log(`Falcor app ready to go @ ${falcorPort}`);
});

graphql.app.listen(graphqlPort, ()=>{
	console.log(`Graphql app ready to go @ ${graphqlPort}`);
})