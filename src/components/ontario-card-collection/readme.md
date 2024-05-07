import { OntarioCardCollection } from '@ontario-lrc/ontario-design-system-component-library-react';
import { OntarioCard } from '@ontario-lrc/ontario-design-system-component-library-react';

# ontario-card-collection

Use a card-collection to encapsulate the card components.

## Usage Guidance

The `ontario-card-collection` component should be used in conjunction with the `ontario-card` component. Please reference the [`ontario-card`](../ontario-card/) readme for further details.

## Configuration

Once the component package has been installed (see Ontario Design System Component Library for installation instructions), the `ontario-card-collection` component can be added directly into the project's code, and can be customized by updating the properties outlined [here](#properties). Please see the [examples](#examples) below for how to configure the component.

## Examples

Example of a bare-bones `ontario-card-collection` component, with a `cardsPerRow` property.

```html
<ontario-card-collection cards-per-row="2">
	<ontario-card
		card-type="horizontal"
		label="Card Title 1"
		image="https://picsum.photos/200/300"
		card-link="https://google.ca"
		horizontal-image-position-type="left"
		horizontal-image-size-type="one-fourth"
		description="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
	>
	</ontario-card>
	<ontario-card
		card-type="horizontal"
		label="Card Title 2"
		image="https://picsum.photos/200/300"
		horizontal-image-position-type="left"
		horizontal-image-size-type="one-fourth"
		description="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
	>
	</ontario-card>
</ontario-card-collection>
```

<OntarioCardCollection cards-per-row="2">
	<OntarioCard
		card-type="horizontal"
		label="Card Title 1"
		image="https://picsum.photos/200/300"
		card-link="https://google.ca"
		horizontal-image-position-type="left"
		horizontal-image-size-type="one-fourth"
		description="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
	>
	</OntarioCard>
	<OntarioCard
		card-type="horizontal"
		label="Card Title 2"
		image="https://picsum.photos/200/300"
		horizontal-image-position-type="left"
		horizontal-image-size-type="one-fourth"
		description="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
	>
	</OntarioCard>
</OntarioCardCollection>

<!-- Auto Generated Below -->

## Properties

| Property      | Attribute       | Description                                                                           | Type          | Default |
| ------------- | --------------- | ------------------------------------------------------------------------------------- | ------------- | ------- |
| `cardsPerRow` | `cards-per-row` | The number of cards to display per row. If no number is passed, it will default to 3. | `2 \| 3 \| 4` | `3`     |

---

_Built with [StencilJS](https://stenciljs.com/)_
