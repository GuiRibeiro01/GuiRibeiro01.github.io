//operação para pegar algo de acordo com o id
async function getItem(client,id){
    const result = await client.db("logs").collection("log").findOne({_id:id});
    if(result){
        console.log(`found a listing in the collection `);
        console.log(result);
        return result
    }else{
        console.log(`no listings found`);
        return {}
    }
}

//operação de modificar os valores do log
async function updateLogById(client,updatedListing,id){
    const result = await client.db("logs").collection("log").updateOne({_id:id},{$set:updatedListing})
    console.log(`${result.matchedCount} document(s) matched the query criteria`)
    console.log(`${result.modifiedCount} documents was/were updated`)
}


module.exports = {getItem, updateLogById}
