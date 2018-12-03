import React from "react";
import { StyleSheet, Text, View, TextInput, Button,FlatList } from "react-native";

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state={searchQuery="hello",movieList:[{title:'hey juliet'},{title:'hey juliet'},{title:'hey juliet'}]};
  }
  render() {
    return (
      //main view
      <View style={{ flexDirection: "column", flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Text>Search For A Movie Name</Text>
        </View>

        <View>
          <TextInput
            style={{ height: 40 }}
            placeholder="Search For A Movie"
            onChangeText={text => this.setState({ searchQuery: text })}
          />
        </View>
        <View>
          <Button
            onPress={() => {
              let keyword = this.state.searchQuery;
              let endpoint = `https://www.omdbapi.com/?s=${keyword}&apikey=7e9e8c93`;
              let movieList = fetch(endpoint)
                .then(response => response.json())
                .then(responseJson => {
                  //return responseJson.movies;
                  this.setState({ movieList: responseJson });
                }).catch((error) => {
                  console.error(error);
                });
            }}
            title="Search Movie"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
        <View>
          <Text>Results Matched</Text>
          <FlatList
            data={this.state.movieList.Search}
            renderItem={({ item }) => <Text>{item.title}</Text>}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

