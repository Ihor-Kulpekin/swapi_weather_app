import React from 'react';
import { TableView, Section, Cell } from 'react-native-tableview-simple';
import { ActivityIndicator, TouchableOpacity } from 'react-native';
import Collapsible from 'react-native-collapsible';
import withAdditionalData from '../hoc/withAdditionalData';
import ListFilms from '../components/ListFilms';
import { selectedFilms } from '../selectors/selectors';
import { getFilmsForDetailsStarship } from '../actions/starshipDetailsActions';

const ListFilmsWithAdditionalData = withAdditionalData(ListFilms, selectedFilms);

const Table = ({ starship, fetchAdditionalData, collapsed, loading, collapse }) => {
  return (
    <TableView>
      <Section>
        <Cell cellStyle="RightDetail" title="Name" detail={`${starship?.name}`} />
        <Cell cellStyle="RightDetail" title="Model" detail={`${starship?.model}`} />
        <Cell
          cellStyle="RightDetail"
          title="Starship class"
          detail={`${starship?.starship_class}`}
        />
        <Cell cellStyle="RightDetail" title="Manufacturer" detail={`${starship?.manufacturer}`} />
        <Cell
          cellStyle="RightDetail"
          title="Cost in credits"
          detail={`${starship?.cost_in_credits}`}
        />
        <Cell cellStyle="RightDetail" title="Length" detail={`${starship?.length}`} />
        <Cell
          cellStyle="RightDetail"
          title="Max Atmosphering Speed"
          detail={`${starship?.max_atmosphering_speed}`}
        />
        <Cell cellStyle="RightDetail" title="Passengers" detail={`${starship?.passengers}`} />
        <Cell
          cellStyle="RightDetail"
          title="Hyperdrive Rating"
          detail={`${starship?.hyperdrive_rating}`}
        />
        <Cell cellStyle="RightDetail" title="MGLT" detail={`${starship?.MGLT}`} />
        <TouchableOpacity
          onPress={() => {
            collapse();
            fetchAdditionalData(getFilmsForDetailsStarship, starship?.films)
          }}
          delayPressIn={150}>
          <Cell
            cellStyle="RightDetail"
            title="Films"
            detail={loading ? <ActivityIndicator size="small" color="#477EFF" /> : null}
          />
          {!loading ? (
            <Collapsible collapsed={collapsed}>
              <ListFilmsWithAdditionalData />
            </Collapsible>
          ) : null}
        </TouchableOpacity>
      </Section>
    </TableView>
  );
};

export default Table;
