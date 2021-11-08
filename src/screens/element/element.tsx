import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import {
  DragonsI,
  LandpadsI,
  MainCategories,
  MainCategoryProps,
  RocketsI,
} from '../../API';
import { CustomText } from '../../atoms/text';
import { TextHierarchy } from '../../atoms/text/dto';
import APICustomHook from '../../hooks/API-hook';
import Swiper from 'react-native-swiper';

const ElementScreen = ({ route }: { route: any }) => {
  const {
    APIEndpoint,
    category,
  }: { APIEndpoint: string; category: MainCategories } = route.params;

  const {
    loading,
    error: errorMessage,
    elementData,
  } = APICustomHook({ APIEndpoint });

  const renderElementData = (
    current: MainCategoryProps
  ): JSX.Element | null => {
    switch (category) {
      case MainCategories.ROCKETS:
        const {
          name: rocketName,
          description,
          height: { meters: rocketHeight },
          diameter: { meters: rocketDiameter },
          mass: { kg },
          cost_per_launch,
          country,
          success_rate_pct,
          flickr_images,
        } = current as RocketsI;
        return (
          <View style={{ flex: 1, width: '100%', padding: 30 }}>
            <CustomText
              additionalStyle={{
                marginBottom: 20,
              }}
              value={rocketName}
            />
            {/* +--------------------------------------------------------- */}
            <View style={{ height: 250, marginBottom: 30 }}>
              <Swiper
                autoplay={true}
                autoplayTimeout={5}
                dotColor='black'
                activeDotColor='white'
                dotStyle={{
                  marginRight: 5,
                  marginLeft: 5,
                }}
                activeDotStyle={{
                  borderWidth: 1,
                  borderColor: 'black',
                  marginRight: 5,
                  marginLeft: 5,
                }}
                paginationStyle={{
                  bottom: 5,
                }}
              >
                {flickr_images.map((currenImageSrc: string, index: number) => {
                  return (
                    <View
                      key={index}
                      style={{ overflow: 'hidden', borderRadius: 15 }}
                    >
                      <Image
                        key={index}
                        source={{ uri: currenImageSrc }}
                        style={{ width: '100%', height: '100%' }}
                      />
                    </View>
                  );
                })}
              </Swiper>
            </View>
            {/* +--------------------------------------------------------- */}
            <CustomText
              additionalStyle={{ marginBottom: 20 }}
              value={description}
              hierarchy={TextHierarchy.SECONDARY}
            />
            {/* +--------------------------------------------------------- */}
            <CustomText value='Height' hierarchy={TextHierarchy.SECONDARY} />
            <CustomText
              additionalStyle={{ marginBottom: 20 }}
              value={rocketHeight}
            />
            {/* +--------------------------------------------------------- */}
            <CustomText value='Diameter' hierarchy={TextHierarchy.SECONDARY} />
            <CustomText
              additionalStyle={{ marginBottom: 20 }}
              value={`${rocketDiameter} M`}
            />
            {/* +--------------------------------------------------------- */}
            <CustomText value='Mass' hierarchy={TextHierarchy.SECONDARY} />
            <CustomText
              additionalStyle={{ marginBottom: 20 }}
              value={`${new Intl.NumberFormat('en-US').format(Number(kg))} KG`}
            />
            {/* +--------------------------------------------------------- */}
            <CustomText
              value='Cost for launch'
              hierarchy={TextHierarchy.SECONDARY}
            />
            <CustomText
              additionalStyle={{ marginBottom: 20 }}
              value={cost_per_launch}
            />
            {/* +--------------------------------------------------------- */}
            <CustomText
              value='Success rate'
              hierarchy={TextHierarchy.SECONDARY}
            />
            <CustomText
              additionalStyle={{ marginBottom: 20 }}
              value={success_rate_pct}
            />
            {/* +--------------------------------------------------------- */}
          </View>
        );
      case MainCategories.DRAGONS:
        const {
          name: dragonName,
          active,
          crew_capacity,
          orbit_duration_yr,
          dry_mass_kg,
          flickr_images: dragonsImages,
          first_flight,
          diameter: { meters: dragonDiameter },
          height_w_trunk: { meters: dragonHeight },
          description: dragonDescription,
        } = current as DragonsI;
        return (
          <View style={{ flex: 1, width: '100%', padding: 30 }}>
            <CustomText
              additionalStyle={{
                marginBottom: 20,
              }}
              value={dragonName}
            />
            {/* +--------------------------------------------------------- */}
            <View style={{ height: 250, marginBottom: 30 }}>
              <Swiper
                autoplay={true}
                autoplayTimeout={5}
                dotColor='black'
                activeDotColor='white'
                dotStyle={{
                  marginRight: 5,
                  marginLeft: 5,
                }}
                activeDotStyle={{
                  borderWidth: 1,
                  borderColor: 'black',
                  marginRight: 5,
                  marginLeft: 5,
                }}
                paginationStyle={{
                  bottom: 5,
                }}
              >
                {dragonsImages.map((currenImageSrc: string, index: number) => {
                  return (
                    <View
                      key={index}
                      style={{ overflow: 'hidden', borderRadius: 15 }}
                    >
                      <Image
                        key={index}
                        source={{ uri: currenImageSrc }}
                        style={{ width: '100%', height: '100%' }}
                      />
                    </View>
                  );
                })}
              </Swiper>
            </View>
            {/* +--------------------------------------------------------- */}

            <CustomText
              additionalStyle={{ marginBottom: 20 }}
              value={dragonDescription}
              hierarchy={TextHierarchy.SECONDARY}
            />
            {/* +--------------------------------------------------------- */}
            <CustomText
              value='Crew capacity'
              hierarchy={TextHierarchy.SECONDARY}
            />
            <CustomText
              additionalStyle={{
                marginBottom: 20,
              }}
              value={crew_capacity}
            />
            {/* +--------------------------------------------------------- */}

            <CustomText
              value='First flight'
              hierarchy={TextHierarchy.SECONDARY}
            />
            <CustomText
              additionalStyle={{
                marginBottom: 20,
              }}
              value={first_flight}
            />
            {/* +--------------------------------------------------------- */}
            <CustomText
              value='Orbit duration'
              hierarchy={TextHierarchy.SECONDARY}
            />
            <CustomText
              additionalStyle={{
                marginBottom: 20,
              }}
              value={`${orbit_duration_yr} yr`}
            />
            {/* +--------------------------------------------------------- */}
            <CustomText value='Mass' hierarchy={TextHierarchy.SECONDARY} />
            <CustomText
              additionalStyle={{
                marginBottom: 20,
              }}
              value={`${dry_mass_kg} KG`}
            />
            {/* +--------------------------------------------------------- */}
            <CustomText value='Diameter' hierarchy={TextHierarchy.SECONDARY} />
            <CustomText
              additionalStyle={{
                marginBottom: 20,
              }}
              value={`${dragonDiameter} M`}
            />
            {/* +--------------------------------------------------------- */}
            <CustomText value='Height' hierarchy={TextHierarchy.SECONDARY} />
            <CustomText
              additionalStyle={{
                marginBottom: 20,
              }}
              value={`${dragonHeight} M`}
            />
          </View>
        );
      case MainCategories.LANDPADS:
        const {
          full_name,
          name: landpadName,
          status,
          type,
          locality,
          region,
          landing_attempts,
          landing_successes,
          wikipedia,
          details: landpadDescription,
          launches,
          images: { large: landpadImages },
        } = current as LandpadsI;
        return (
          <View style={{ flex: 1, width: '100%', padding: 30 }}>
            <CustomText
              additionalStyle={{
                marginBottom: 20,
              }}
              value={landpadName}
            />
            {/* +--------------------------------------------------------- */}
            <View style={{ height: 250, marginBottom: 30 }}>
              <Swiper
                autoplay={true}
                autoplayTimeout={5}
                dotColor='black'
                activeDotColor='white'
                dotStyle={{
                  marginRight: 5,
                  marginLeft: 5,
                }}
                activeDotStyle={{
                  borderWidth: 1,
                  borderColor: 'black',
                  marginRight: 5,
                  marginLeft: 5,
                }}
                paginationStyle={{
                  bottom: 5,
                }}
              >
                {landpadImages.map((currenImageSrc: string, index: number) => {
                  return (
                    <View
                      key={index}
                      style={{ overflow: 'hidden', borderRadius: 15 }}
                    >
                      <Image
                        key={index}
                        source={{ uri: currenImageSrc }}
                        style={{ width: '100%', height: '100%' }}
                      />
                    </View>
                  );
                })}
              </Swiper>
            </View>
            {/* +--------------------------------------------------------- */}

            <CustomText
              additionalStyle={{ marginBottom: 20 }}
              value={landpadDescription}
              hierarchy={TextHierarchy.SECONDARY}
            />
            {/* +--------------------------------------------------------- */}
            <CustomText value='Type' hierarchy={TextHierarchy.SECONDARY} />
            <CustomText additionalStyle={{ marginBottom: 20 }} value={type} />
            {/* +--------------------------------------------------------- */}
            <CustomText value='Locality' hierarchy={TextHierarchy.SECONDARY} />
            <CustomText
              additionalStyle={{ marginBottom: 20 }}
              value={locality}
            />
            {/* +--------------------------------------------------------- */}
            <CustomText value='Region' hierarchy={TextHierarchy.SECONDARY} />
            <CustomText additionalStyle={{ marginBottom: 20 }} value={region} />
            {/* +--------------------------------------------------------- */}
            <CustomText value='Launches' hierarchy={TextHierarchy.SECONDARY} />
            <CustomText
              additionalStyle={{ marginBottom: 20 }}
              value={launches.length}
            />
            {/* +--------------------------------------------------------- */}
            <CustomText
              value='Landing attempts'
              hierarchy={TextHierarchy.SECONDARY}
            />
            <CustomText
              additionalStyle={{ marginBottom: 20 }}
              value={landing_attempts}
            />
            {/* +--------------------------------------------------------- */}
            <CustomText
              value='Landing Successes'
              hierarchy={TextHierarchy.SECONDARY}
            />
            <CustomText
              additionalStyle={{ marginBottom: 20 }}
              value={landing_successes}
            />
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#080808',
      }}
    >
      {loading ? (
        <View>
          <Text style={{ color: 'white', textAlign: 'center' }}>
            Loading...
          </Text>
        </View>
      ) : (
        <></>
      )}

      {errorMessage ? (
        <View>
          <Text style={{ color: 'white', textAlign: 'center' }}>
            {errorMessage}
          </Text>
        </View>
      ) : (
        <></>
      )}

      {!elementData || !Object.keys(elementData).length ? (
        <></>
      ) : (
        <ScrollView>
          {renderElementData(elementData as MainCategoryProps)}
        </ScrollView>
      )}
    </View>
  );
};

export default ElementScreen;
