/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { checkEyes, setup } from '../util';

const test = 'Checkbox';

export function CheckboxSpec() {
  describe(test, () => {
    beforeEach(() => {
      setup(test);
    });

    it('default', () => {
      cy.visit('/checkboxes');
      checkEyes('default');
    });
  });
}
