import * as React from 'react';
import { requireNativeViewManager } from 'expo-modules-core';
import { ViewProps } from 'react-native';
// const NativeImageView = requireNativeComponent('NativeImageView');

export type Props = {
  imageUrl?: string;
} & ViewProps;

const NativeImageView: React.ComponentType<Props> = requireNativeViewManager('NativeImageView');

export default function ImageView(props: Props) {
  // return something for testing
  return <NativeImageView {...props} />;
}
