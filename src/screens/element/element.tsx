import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  ActivityIndicator,
  Linking,
  ImageBackground,
  Pressable,
} from 'react-native';
import {
  CrewI,
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
import { CustomButton } from '../../atoms/button';
import { ButtonSize } from '../../atoms/button/dto';

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
          wikipedia: rocketExternalLink,
        } = current as RocketsI;
        return (
          <View style={{ flex: 1, width: '100%', padding: 30 }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 20,
              }}
            >
              <CustomText
                additionalStyle={{
                  marginBottom: 20,
                }}
                value={rocketName}
              />
              <CustomButton
                title='Go to link'
                size={ButtonSize.MEDIUM}
                callbackFunc={() => Linking.openURL(rocketExternalLink)}
              />
            </View>
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
              value={`${Intl.NumberFormat('en-US').format(cost_per_launch)} $`}
            />
            {/* +--------------------------------------------------------- */}
            <CustomText
              value='Success rate'
              hierarchy={TextHierarchy.SECONDARY}
            />
            <CustomText
              additionalStyle={{ marginBottom: 20 }}
              value={`${success_rate_pct} %`}
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
          wikipedia: dragonExternalLink,
        } = current as DragonsI;
        return (
          <View style={{ flex: 1, width: '100%', padding: 30 }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 20,
              }}
            >
              <CustomText
                additionalStyle={{
                  marginBottom: 20,
                }}
                value={dragonName}
              />
              <CustomButton
                title='Go to link'
                size={ButtonSize.MEDIUM}
                callbackFunc={() => Linking.openURL(dragonExternalLink)}
              />
            </View>
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
          wikipedia: landpadExternalLink,
          details: landpadDescription,
          launches,
          images: { large: landpadImages },
        } = current as LandpadsI;
        return (
          <View style={{ flex: 1, width: '100%', padding: 30 }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 20,
              }}
            >
              <CustomText
                additionalStyle={{
                  marginBottom: 20,
                }}
                value={landpadName}
              />
              <CustomButton
                title='Go to link'
                size={ButtonSize.MEDIUM}
                callbackFunc={() => Linking.openURL(landpadExternalLink)}
              />
            </View>
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
      case MainCategories.CREW:
        const {
          name: crewName,
          agency,
          image: crewImage,
          wikipedia: crewExternalLink,
          launches: crewLaunches,
        } = current as CrewI;

        return (
          <View
            style={{
              flex: 1,
              width: '100%',
              padding: 30,
            }}
          >
            <CustomText
              additionalStyle={{
                marginBottom: 20,
              }}
              value={crewName}
            />
            {/* +--------------------------------------------------------- */}
            <CustomText value='Agency' hierarchy={TextHierarchy.SECONDARY} />
            <CustomText additionalStyle={{ marginBottom: 20 }} value={agency} />
            {/* +--------------------------------------------------------- */}
            <CustomText value='Launches' hierarchy={TextHierarchy.SECONDARY} />
            <CustomText
              additionalStyle={{ marginBottom: 20 }}
              value={crewLaunches.length}
            />
            {/* +--------------------------------------------------------- */}

            <Pressable
              onPress={() => Linking.openURL(crewExternalLink)}
              style={{ overflow: 'hidden', borderRadius: 10 }}
            >
              <ImageBackground
                source={{ uri: crewImage }}
                resizeMode='cover'
                style={{
                  flex: 1,
                  width: '100%',
                  height: 450,
                }}
              />
            </Pressable>
            {/* +--------------------------------------------------------- */}
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
        <View
          style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <ActivityIndicator size='large' color='white' />
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
        <ScrollView style={{ width: '100%' }}>
          {renderElementData(elementData as MainCategoryProps)}
        </ScrollView>
      )}
    </View>
  );
};

export default ElementScreen;
