import { SbReactComponentsMap } from '@storyblok/react';

import { About } from './About';
import { Features } from './Features';
import { Footer } from './Footer';
import { Header } from './Header';
import { Methods } from './Methods';
import { Ordination } from './Ordination';
import { GenericContent } from './GenericContent';

export const sections: SbReactComponentsMap = {
  about: About,
  features: Features,
  footer: Footer,
  header: Header,
  methods: Methods,
  ordination: Ordination,
  generic: GenericContent,
};
