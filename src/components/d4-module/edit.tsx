// External Dependencies.
import React, { ReactElement } from 'react';
import classnames from 'classnames';

// Divi Dependencies.
import { ModuleContainer } from '@divi/module';
import { mergeAttrs } from '@divi/module-utils';

// Local Dependencies.
import { D4ModuleEditProps } from './types';
import { defaultAttrs } from './constants';
import { ModuleStyles } from './styles';

/**
 * Divi 4 Module edit component of visual builder.
 *
 * @since ??
 *
 * @param {D4ModuleEditProps} props React component props.
 *
 * @returns {ReactElement}
 */
const D4ModuleEdit = (props: D4ModuleEditProps): ReactElement => {
  const {
    attrs,
    id,
    name,
  } = props;

  // Merge module default values with module attributes.
  const moduleAttrs = mergeAttrs({
    defaultAttrs,
    attrs,
  });

  const HeadingLevel            = moduleAttrs?.titleFont?.font?.desktop?.value?.headingLevel;
  const title                   = moduleAttrs?.title?.desktop?.value;
  const content                 = moduleAttrs?.content?.desktop?.value;
  const backgroundLayoutDesktop = moduleAttrs?.text?.text?.desktop?.value?.color;
  const backgroundLayoutTablet  = moduleAttrs?.text?.text?.tablet?.value?.color;
  const backgroundLayoutPhone   = moduleAttrs?.text?.text?.phone?.value?.color;

  return (
    <ModuleContainer
      attrs={moduleAttrs}
      componentType="edit"
      id={id}
      name={name}
      stylesComponent={ModuleStyles}
      className={classnames({
        [`et_pb_bg_layout_${backgroundLayoutDesktop}`]:       backgroundLayoutDesktop,
        [`et_pb_bg_layout_${backgroundLayoutTablet}_tablet`]: backgroundLayoutTablet,
        [`et_pb_bg_layout_${backgroundLayoutPhone}_phone`]:   backgroundLayoutPhone,
      })}
    >
      <HeadingLevel className="d4_module_title">{title}</HeadingLevel>
      <div
        className="d4_module_content"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </ModuleContainer>
  );
}

export {
  D4ModuleEdit,
};
