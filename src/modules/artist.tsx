import React, { useEffect, ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, List, Card, Divider } from "antd";
import { TrendingAlbums } from "shared/components";
import types from "store/types";

const { Meta } = Card;

const Artist = ({ match: { params } }: any): ReactElement => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: types.FETCH_ARTIST, payload: params?.id });
    dispatch({ type: types.FETCH_TOP_FIVE_TRACKS, payload: params?.id });
    dispatch({ type: types.FETCH_ARTIST_ALBUMS, payload: params?.id });
  }, [dispatch]);

  const {
    artist: { item, itemLoaded },
    topFiveTracks: { listItems },
    list: { listItems: albumData },
  }: any = useSelector((state) => state);

  const topListData = listItems?.data?.reduce(
    (acc: string[], { title }: { title: string }) => {
      return [...acc, title];
    },
    []
  );

  return (
    <div className="profile">
      <Card className="profile__info" loading={!itemLoaded}>
        <Meta
          avatar={<Avatar src={item?.picture_small} />}
          title={item?.name}
          description={`${item?.nb_fan} Fans`}
        />

        <Divider />

        <List
          size="small"
          header={<strong>Top Tracks</strong>}
          bordered
          dataSource={topListData}
          renderItem={(item: string) => <List.Item>{item}</List.Item>}
        />
      </Card>

      <Card className="profile__topTracks" loading={!itemLoaded}>
        <TrendingAlbums heading="Albums" data={albumData?.data} />
      </Card>
    </div>
  );
};

export default Artist;
