{/*import React, { Component } from 'react'
import { Grid, Col, Image } from 'react-bootstrap';
import './Results.css';*/}
{/*
const Component = React.Component;
const Pure = React.PureComponent;
const Transition = ReactTransitionGroup.Transition;
const TransitionGroup = ReactTransitionGroup.TransitionGroup;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: false,
      data: [],
      query: "",
      sortByValue: "",
      sorted: false,
      show: false
    };
  }
  componentDidMount() {
    this.setState({ loading: true });
    fetch("https://next.json-generator.com/api/json/get/E18Keb26r", {
      method: "get",
      headers: {
        "Content-Type": "application/json; charset=UTF-8"
      }
    })
      .then(data => data.json())
      .then(data => this.setState({ data: data.table, loading: false }))
      .catch(err => {
        console.error(err);
        this.setState({ error: true, loading: false });
      });
  }

  handleSearch = e => {
    e.preventDefault();
    this.setState({ query: e.target.value.trim().toLowerCase() });
  };

  handleClick = e => {
    e.preventDefault();
    this.setState({ sortByValue: e.target.id });
    this.setState(state => ({ sorted: !state.sorted }));
  };

  updateData = () => {
    const { data, sortByValue, sorted, query } = this.state;
    return data
      .sort((a, b) => {
        if (sortByValue === "club") {
          if (sorted) {
            return a.team.name.localeCompare(b.team.name, "es", {
              ignorePunctuation: true
            });
          } else {
            return b.team.name.localeCompare(a.team.name, "es", {
              ignorePunctuation: true
            });
          }
        } else {
          if (sorted) {
            return a[sortByValue] - b[sortByValue];
          } else {
            return b[sortByValue] - a[sortByValue];
          }
        }
      })
      .filter(({ team: { name } }) => {
        return (
          name
            .toLowerCase()
            .trim()
            .indexOf(query) > -1
        );
      });
  };

  render() {
    const { data, loading, error, sorted } = this.state;
    const dataLen = this.updateData().length;
    return (
      <React.Fragment>
        <Header />
        <Main>
          <SearchForm onHandleSearch={this.handleSearch} />
          {error ? (
            <Dialog styles={{ color: "#ff6363" }}>
              <h3>Oops! Couldn't load results, try again later!</h3>
            </Dialog>
          ) : loading ? (
            <Dialog styles={{ color: "#bbbdd0" }}>
              <h3>loading...</h3>
            </Dialog>
          ) : (
            <div className="table-scroll">
              <table>
                <thead>
                  <tr>
                    <th id="position" onClick={this.handleClick}>
                      #
                    </th>
                    <th id="club" onClick={this.handleClick}>
                      Club
                    </th>
                    <th id="points" onClick={this.handleClick}>
                      Pts
                    </th>
                    <th id="goalDifference" onClick={this.handleClick}>
                      Diff
                    </th>
                  </tr>
                </thead>
                <TableBody data={this.updateData()} sorted={sorted} />
              </table>
              {dataLen === 0 ? (
                <Dialog>
                  <p>Found no results</p>
                </Dialog>
              ) : null}
            </div>
          )}
        </Main>

        {/*<Footer />*/ /*}
      </React.Fragment>
    );
  }
}
class TableBody extends Pure {
  constructor(props) {
    super(props);
    // this.rows = [];
    // this.tl = new TimelineLite();
  }
  componentDidMount() {
    // this.tl.staggerFrom(this.rows, 0.5, { y: -10, autoAlpha: 0 }, 0.1);
    // ref={tr => (this.rows[index] = tr)}
  }

  render() {
    const { data, sorted } = this.props;
    return (
        <TransitionGroup component="tbody">
          {data.map(
            (
              { position, team: { name, crestUrl }, points, goalDifference },
              index
            ) => (
              <Transition
                key={index}
                // timeout={500}
                mountOnEnter
                unmountOnExit
                appear={true}
                in={sorted}
                addEndListener={(node, done) => {
                  TweenMax.from(
                    node, 0.5, {
                      height: 0,
                      y: -10 * (index + 1),
                      autoAlpha: 0,
                      onComplete: done
                    }, 0.1);
                }}
                >
                <tr key={index}>
                  <td>{position}</td>
                  <td>
                    <img src={crestUrl} alt={`Club crest of ${name}`}/>
                    {name}
                  </td>
                  <td>{points}</td>
                  <td>
                    {`${goalDifference > 0 ? "+" : ""}`}
                    {goalDifference}
                  </td>
                </tr>
              </Transition>
            )
          )}
        </TransitionGroup>
    );
  }
}
function SearchForm(props) {
  const { onHandleSearch } = props;
  return (
    <form>
      <label htmlFor="search" />
      <input
        id="search"
        onChange={onHandleSearch}
        type="text"
        placeholder="FC Barcelona"
      />
    </form>
  );
}

function Dialog(props) {
  return (
    <div className="dialog" style={props.styles}>
      {props.children}
    </div>
  );
}
function Header() {
  return (
    <header className="flex-center">
      <h1>La Liga 2017-18</h1>
    </header>
  );
}
function Main(props) {
  return <main className="table-container">{props.children}</main>;
}
function Footer() {
  return (
    <footer className="flex-center">
      <p>Made by Giovanni De Andre</p>
    </footer>
  );
}
ReactDOM.render(<App />, document.getElementById("app"));*/}
// const clubs = [
//   {
//     stage: "REGULAR_SEASON",
//     type: "TOTAL",
//     group: null,
//     table: [
//       {
//         position: 1,
//         team: {
//           id: 81,
//           name: "FC Barcelona",
//           crestUrl:
//             "http://upload.wikimedia.org/wikipedia/de/a/aa/Fc_barcelona.svg"
//         },
//         playedGames: 38,
//         won: 28,
//         draw: 9,
//         lost: 1,
//         points: 93,
//         goalsFor: 99,
//         goalsAgainst: 29,
//         goalDifference: 70
//       },
//       {
//         position: 2,
//         team: {
//           id: 78,
//           name: "Club Atlético de Madrid",
//           crestUrl:
//             "http://upload.wikimedia.org/wikipedia/de/c/c1/Atletico_Madrid_logo.svg"
//         },
//         playedGames: 38,
//         won: 23,
//         draw: 10,
//         lost: 5,
//         points: 79,
//         goalsFor: 58,
//         goalsAgainst: 22,
//         goalDifference: 36
//       },
//       {
//         position: 3,
//         team: {
//           id: 86,
//           name: "Real Madrid CF",
//           crestUrl:
//             "http://upload.wikimedia.org/wikipedia/de/3/3f/Real_Madrid_Logo.svg"
//         },
//         playedGames: 38,
//         won: 22,
//         draw: 10,
//         lost: 6,
//         points: 76,
//         goalsFor: 94,
//         goalsAgainst: 44,
//         goalDifference: 50
//       },
//       {
//         position: 4,
//         team: {
//           id: 95,
//           name: "Valencia CF",
//           crestUrl:
//             "http://upload.wikimedia.org/wikipedia/de/7/75/FC_Valencia.svg"
//         },
//         playedGames: 38,
//         won: 22,
//         draw: 7,
//         lost: 9,
//         points: 73,
//         goalsFor: 65,
//         goalsAgainst: 38,
//         goalDifference: 27
//       },
//       {
//         position: 5,
//         team: {
//           id: 94,
//           name: "Villarreal CF",
//           crestUrl:
//             "http://upload.wikimedia.org/wikipedia/de/7/70/Villarreal_CF_logo.svg"
//         },
//         playedGames: 38,
//         won: 18,
//         draw: 7,
//         lost: 13,
//         points: 61,
//         goalsFor: 57,
//         goalsAgainst: 50,
//         goalDifference: 7
//       },
//       {
//         position: 6,
//         team: {
//           id: 90,
//           name: "Real Betis Balompié",
//           crestUrl:
//             "http://upload.wikimedia.org/wikipedia/de/4/43/Real_Betis.svg"
//         },
//         playedGames: 38,
//         won: 18,
//         draw: 6,
//         lost: 14,
//         points: 60,
//         goalsFor: 60,
//         goalsAgainst: 61,
//         goalDifference: -1
//       },
//       {
//         position: 7,
//         team: {
//           id: 559,
//           name: "Sevilla FC",
//           crestUrl:
//             "http://upload.wikimedia.org/wikipedia/en/8/86/Sevilla_cf_200px.png"
//         },
//         playedGames: 38,
//         won: 17,
//         draw: 7,
//         lost: 14,
//         points: 58,
//         goalsFor: 49,
//         goalsAgainst: 58,
//         goalDifference: -9
//       },
//       {
//         position: 8,
//         team: {
//           id: 82,
//           name: "Getafe CF",
//           crestUrl:
//             "https://upload.wikimedia.org/wikipedia/en/7/7f/Getafe_logo.png"
//         },
//         playedGames: 38,
//         won: 15,
//         draw: 10,
//         lost: 13,
//         points: 55,
//         goalsFor: 42,
//         goalsAgainst: 33,
//         goalDifference: 9
//       },
//       {
//         position: 9,
//         team: {
//           id: 298,
//           name: "Girona FC",
//           crestUrl:
//             "http://upload.wikimedia.org/wikipedia/en/9/90/For_article_Girona_FC.svg"
//         },
//         playedGames: 38,
//         won: 14,
//         draw: 9,
//         lost: 15,
//         points: 51,
//         goalsFor: 50,
//         goalsAgainst: 59,
//         goalDifference: -9
//       },
//       {
//         position: 10,
//         team: {
//           id: 278,
//           name: "SD Eibar",
//           crestUrl:
//             "http://upload.wikimedia.org/wikipedia/en/7/75/SD_Eibar_logo.svg"
//         },
//         playedGames: 38,
//         won: 14,
//         draw: 9,
//         lost: 15,
//         points: 51,
//         goalsFor: 44,
//         goalsAgainst: 50,
//         goalDifference: -6
//       },
//       {
//         position: 11,
//         team: {
//           id: 92,
//           name: "Real Sociedad de Fútbol",
//           crestUrl:
//             "http://upload.wikimedia.org/wikipedia/de/5/55/Real_Sociedad_San_Sebasti%C3%A1n.svg"
//         },
//         playedGames: 38,
//         won: 14,
//         draw: 7,
//         lost: 17,
//         points: 49,
//         goalsFor: 66,
//         goalsAgainst: 59,
//         goalDifference: 7
//       },
//       {
//         position: 12,
//         team: {
//           id: 80,
//           name: "RCD Espanyol de Barcelona",
//           crestUrl:
//             "http://upload.wikimedia.org/wikipedia/de/a/a7/RCD_Espanyol_De_Barcelona.svg"
//         },
//         playedGames: 38,
//         won: 12,
//         draw: 13,
//         lost: 13,
//         points: 49,
//         goalsFor: 36,
//         goalsAgainst: 42,
//         goalDifference: -6
//       },
//       {
//         position: 13,
//         team: {
//           id: 558,
//           name: "RC Celta de Vigo",
//           crestUrl:
//             "http://upload.wikimedia.org/wikipedia/de/0/0c/Celta_Vigo.svg"
//         },
//         playedGames: 38,
//         won: 13,
//         draw: 10,
//         lost: 15,
//         points: 49,
//         goalsFor: 59,
//         goalsAgainst: 60,
//         goalDifference: -1
//       },
//       {
//         position: 14,
//         team: {
//           id: 263,
//           name: "Deportivo Alavés",
//           crestUrl:
//             "http://upload.wikimedia.org/wikipedia/en/2/2e/Deportivo_Alaves_logo.svg"
//         },
//         playedGames: 38,
//         won: 15,
//         draw: 2,
//         lost: 21,
//         points: 47,
//         goalsFor: 40,
//         goalsAgainst: 50,
//         goalDifference: -10
//       },
//       {
//         position: 15,
//         team: {
//           id: 88,
//           name: "Levante UD",
//           crestUrl:
//             "http://upload.wikimedia.org/wikipedia/de/1/1f/Levante_ud.svg"
//         },
//         playedGames: 38,
//         won: 11,
//         draw: 13,
//         lost: 14,
//         points: 46,
//         goalsFor: 44,
//         goalsAgainst: 58,
//         goalDifference: -14
//       },
//       {
//         position: 16,
//         team: {
//           id: 77,
//           name: "Athletic Club",
//           crestUrl:
//             "https://upload.wikimedia.org/wikipedia/en/9/98/Club_Athletic_Bilbao_logo.svg"
//         },
//         playedGames: 38,
//         won: 10,
//         draw: 13,
//         lost: 15,
//         points: 43,
//         goalsFor: 41,
//         goalsAgainst: 49,
//         goalDifference: -8
//       },
//       {
//         position: 17,
//         team: {
//           id: 745,
//           name: "CD Leganés",
//           crestUrl:
//             "http://upload.wikimedia.org/wikipedia/en/thumb/0/02/Club_Deportivo_Legan%C3%A9s.png/180px-Club_Deportivo_Legan%C3%A9s.png"
//         },
//         playedGames: 38,
//         won: 12,
//         draw: 7,
//         lost: 19,
//         points: 43,
//         goalsFor: 34,
//         goalsAgainst: 51,
//         goalDifference: -17
//       },
//       {
//         position: 18,
//         team: {
//           id: 560,
//           name: "RC Deportivo La Coruña",
//           crestUrl:
//             "http://upload.wikimedia.org/wikipedia/en/4/4e/RC_Deportivo_La_Coru%C3%B1a_logo.svg"
//         },
//         playedGames: 38,
//         won: 6,
//         draw: 11,
//         lost: 21,
//         points: 29,
//         goalsFor: 38,
//         goalsAgainst: 76,
//         goalDifference: -38
//       },
//       {
//         position: 19,
//         team: {
//           id: 275,
//           name: "UD Las Palmas",
//           crestUrl:
//             "http://upload.wikimedia.org/wikipedia/en/2/20/UD_Las_Palmas_logo.svg"
//         },
//         playedGames: 38,
//         won: 5,
//         draw: 7,
//         lost: 26,
//         points: 22,
//         goalsFor: 24,
//         goalsAgainst: 74,
//         goalDifference: -50
//       },
//       {
//         position: 20,
//         team: {
//           id: 84,
//           name: "Málaga CF",
//           crestUrl:
//             "https://upload.wikimedia.org/wikipedia/en/6/6d/M%C3%A1laga_CF.svg"
//         },
//         playedGames: 38,
//         won: 5,
//         draw: 5,
//         lost: 28,
//         points: 20,
//         goalsFor: 24,
//         goalsAgainst: 61,
//         goalDifference: -37
//       }
//     ]
//   }
// ];
