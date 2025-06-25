import {
  Accordion,
  Button, ComboBox, ComboBoxOption, DateInput, ExternalLink, RadioButton,
  Table, TableBody, TableBodyData, TableBodyDataCellTemplate, TableBodyDataRowTemplate,
  TableHead, TableHeadCell,
  TableHeadRow,
  TableSortingRule,
  TableSortingRules, TableWrapper, TextInput
} from '@utahdts/utah-design-system';
import { useEffect, useState } from 'react';
import jeep from '../../../static/images/jeep.jpg';
import camping from '../../../static/images/camping.jpg';

export function DemoContent() {
  const [visitors, setVisitors] = useState('')

  const today = new Date();

  const formatDate = (/** @type {number} */ days) => {
    const aMonthFromNow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + days);
    const month = (aMonthFromNow.getMonth() + 1).toString().padStart(2, '0'); // Add 1 because getMonth() is 0-indexed
    const day = aMonthFromNow.getDate().toString().padStart(2, '0');
    const year = aMonthFromNow.getFullYear();
    return `${month}/${day}/${year}`;
  }


  const eventsRecords = [
    {
      name: 'Junior Ranger Program',
      place: 'Visitor Center',
      date: `${formatDate(30)} - 8:00 AM`,
    },
    {
      name: 'Stargazing',
      place: 'Visitor Center',
      date: `${formatDate(14)} - 9:00 PM`,
    },
    {
      name: 'Discover Arches',
      place: 'Moab, UT',
      date: `${formatDate(21)} - 10:00 AM`,
    },
  ].map((event) => ({
    ...event,
    dateSort: new Date(event.date),
  }));

  useEffect(() => {
    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'noindex,nofollow';
    const link = document.createElement('link');
    link.rel = 'canonical';
    link.href = 'https://www.nps.gov/arch/index.htm';

    document.head.appendChild(meta);
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(meta);
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="demo-content">
      <div className="hero">
        <div className="hero__image" />
        <div className="hero__title-wrapper text-on-primary-color content-width">
          <div className="hero__title">Arches National Park</div>
          <div className="hero__title-background" />
        </div>
      </div>

      <div className="content-width m-auto">
        <h1 className="my-spacing-l text-center">Experience the Natural Wonders</h1>
        <p className="lead-in text-center">
          Arches National Park is a geological marvel, boasting over 2,000 natural stone arches, soaring pinnacles, and massive balanced rocks.<br />
          This breathtaking landscape offers a stunning display of nature&apos;s artistry, sculpted over millions of years by the forces of erosion.
        </p>
      </div>

      <div className="grid-wrapper px-spacing-ls">
        <div className="grid-fixed grid-fixed--2col mb-spacing-xl cards">
          <span className="action-card action-card--primary-color action-card--solid text-on-primary-color">
            <div className="action-card__title">
              <h3>Plan Your Visit</h3>
              <span className="button--icon button--icon-right"><span className="utds-icon-before-arrow-right" aria-hidden="true" /></span>
            </div>
            <div className="action-card__body">
              Directions to the park, transportation...
            </div>
          </span>
          <span className="action-card action-card--primary-color white-color-background">
            <div className="action-card__title">
              <h3>About Arches</h3>
              <span className="button--icon button--icon-right"><span className="utds-icon-before-arrow-right" aria-hidden="true" /></span>
            </div>
            <div className="action-card__body">
              Establishment of the park and its natural history.
            </div>
          </span>
          <span className="action-card action-card--primary-color white-color-background">
            <div className="action-card__title">
              <h3>Volunteering</h3>
              <span className="button--icon button--icon-right"><span className="utds-icon-before-arrow-right" aria-hidden="true" /></span>
            </div>
            <div className="action-card__body">
              Get involved with the park&apos;s conservation efforts.
            </div>
          </span>
          <span className="action-card action-card--primary-color white-color-background">
            <div className="action-card__title">
              <h3>Contact</h3>
              <span className="button--icon button--icon-right"><span className="utds-icon-before-arrow-right" aria-hidden="true" /></span>
            </div>
            <div className="action-card__body">
              How to reach us.
            </div>
          </span>
        </div>
      </div>

      <div className="activities">
        <div className="activities__image" />
        <div className="activities__content content-width m-auto">
          <div className="flex">
            <div className="p-spacing-xl">
              <h2 className="mb-spacing">Activities</h2>
              <div>
                <h4 className="font-bold">Hiking</h4>
                <p>Information on various trails, difficulty levels, and trail maps.</p>
              </div>
              <div>
                <h4 className="font-bold">Camping</h4>
                <p>Details about campgrounds, reservations, and amenities.</p>
              </div>
              <div>
                <h4 className="font-bold">Guided Tours</h4>
                <p>Options for ranger-led tours, guided hikes, and educational programs.</p>
              </div>
              <div>
                <h4 className="font-bold">Stargazing</h4>
                <p className="my-auto">Information about the park&apos;s night sky programs and best viewing spots.</p>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap justify-center white-color-background p-spacing-xl">
              <div className="text-center mb-spacing-xl">
                <svg width="100" height="100" viewBox="0 0 100 100" className="icon-map">
                  <path
                    d="M57.8125 15.625C57.8125 14.0798 57.3543 12.5694 56.4959 11.2846C55.6374 9.99985 54.4173 8.9985 52.9897 8.40719C51.5622 7.81589 49.9913 7.66117 48.4759 7.96262C46.9604 8.26407 45.5683 9.00813 44.4757 10.1007C43.3831 11.1933 42.6391 12.5854 42.3376 14.1009C42.0362 15.6163 42.1909 17.1872 42.7822 18.6147C43.3735 20.0423 44.3749 21.2624 45.6596 22.1209C46.9444 22.9793 48.4548 23.4375 50 23.4375C52.0712 23.435 54.0569 22.6111 55.5215 21.1465C56.9861 19.6819 57.81 17.6962 57.8125 15.625ZM45.3125 15.625C45.3125 14.6979 45.5874 13.7916 46.1025 13.0208C46.6176 12.2499 47.3496 11.6491 48.2062 11.2943C49.0627 10.9395 50.0052 10.8467 50.9145 11.0276C51.8238 11.2084 52.659 11.6549 53.3146 12.3104C53.9701 12.966 54.4166 13.8012 54.5974 14.7105C54.7783 15.6198 54.6855 16.5623 54.3307 17.4188C53.9759 18.2754 53.3751 19.0074 52.6042 19.5225C51.8334 20.0376 50.9271 20.3125 50 20.3125C48.7568 20.3125 47.5645 19.8186 46.6854 18.9396C45.8064 18.0605 45.3125 16.8682 45.3125 15.625Z"
                  />
                  <path
                    d="M94.6104 18.7943C94.4015 18.6497 94.1602 18.5589 93.9079 18.5297C93.6555 18.5006 93.3999 18.534 93.1635 18.6271L65.612 29.3411L59.6885 26.9708C62.0792 22.7396 64.0417 18.3724 64.0417 15.3958C64.0417 11.6662 62.5601 8.08935 59.9229 5.45212C57.2856 2.81489 53.7088 1.33331 49.9792 1.33331C46.2496 1.33331 42.6727 2.81489 40.0355 5.45212C37.3983 8.08935 35.9167 11.6662 35.9167 15.3958C35.9375 16.1337 36.0381 16.8671 36.2167 17.5833L34.9354 17.0708C34.5921 16.9331 34.2108 16.9226 33.8604 17.0411L5.73542 26.4161C5.42467 26.5196 5.1543 26.7182 4.96252 26.9837C4.77074 27.2492 4.66725 27.5683 4.66667 27.8958V93.5208C4.66686 93.7683 4.72582 94.0121 4.83869 94.2323C4.95156 94.4525 5.11511 94.6428 5.31589 94.7874C5.51667 94.9321 5.74893 95.0269 5.99355 95.0643C6.23817 95.1016 6.48815 95.0803 6.72292 95.0021L34.3057 85.8083L65.0229 98.0974C65.2078 98.171 65.4051 98.2087 65.6042 98.2083C65.7977 98.2089 65.9897 98.1729 66.1698 98.1021L94.2948 87.1646C94.5884 87.0506 94.8406 86.8505 95.0185 86.5907C95.1964 86.3308 95.2916 86.0232 95.2917 85.7083V20.0833C95.2915 19.8293 95.2293 19.5791 95.1106 19.3544C94.9919 19.1298 94.8202 18.9375 94.6104 18.7943ZM35.9167 80.2036L64.0417 91.4536V94.338L35.9167 83.088V80.2036ZM64.0417 77.8958V88.088L35.9167 76.838V48.4786C37.233 48.7952 38.4591 49.4095 39.5009 50.2741C40.5427 51.1387 41.3723 52.2307 41.926 53.4661L48.9276 69.2192C50.0427 71.7278 51.9855 73.7773 54.431 75.0247C56.8764 76.2721 59.6761 76.6418 62.3615 76.0718C65.0469 75.5019 67.4551 74.027 69.1831 71.8939C70.9111 69.7607 71.8541 67.0988 71.8542 64.3536V62.2708H68.7292V64.3536C68.729 66.3829 68.0317 68.3505 66.7542 69.9271C65.4767 71.5038 63.6965 72.5938 61.7114 73.0147C59.7263 73.4357 57.6568 73.162 55.8493 72.2396C54.0419 71.3171 52.6061 69.8019 51.7823 67.9474L44.7807 52.1974C43.6656 49.6888 41.7228 47.6394 39.2774 46.392C36.8319 45.1445 34.0323 44.7749 31.3468 45.3448C28.6614 45.9147 26.2532 47.3896 24.5252 49.5228C22.7972 51.6559 21.8543 54.3178 21.8542 57.063V59.1458H24.9792V57.063C24.9822 54.8965 25.7788 52.8062 27.2183 51.1871C28.6577 49.5679 30.6404 48.5322 32.7917 48.2755V76.713L14.0417 82.0739V33.6849L32.7917 26.988V41.9583H35.9167V27.0786L41.6792 29.3849C44.7651 34.4677 48.0651 38.8927 48.7323 39.7755C48.8778 39.9696 49.0666 40.1271 49.2835 40.2355C49.5005 40.344 49.7397 40.4005 49.9823 40.4005C50.2249 40.4005 50.4641 40.344 50.6811 40.2355C50.898 40.1271 51.0868 39.9696 51.2323 39.7755C51.6495 39.2224 53.1073 37.2755 54.8807 34.663L64.0417 38.3286V44.4364L61.3745 47.1036C61.0816 47.3966 60.917 47.794 60.917 48.2083C60.917 48.6226 61.0816 49.02 61.3745 49.313L63.3948 51.3333L61.3745 53.3536C61.0816 53.6466 60.917 54.044 60.917 54.4583C60.917 54.8726 61.0816 55.27 61.3745 55.563L66.062 60.2505C66.355 60.5434 66.7524 60.708 67.1667 60.708C67.581 60.708 67.9783 60.5434 68.2714 60.2505L70.2917 58.2302L72.312 60.2505C72.605 60.5434 73.0024 60.708 73.4167 60.708C73.831 60.708 74.2283 60.5434 74.5214 60.2505L79.2089 55.563C79.5018 55.27 79.6663 54.8726 79.6663 54.4583C79.6663 54.044 79.5018 53.6466 79.2089 53.3536L77.1885 51.3333L79.2089 49.313C79.5018 49.02 79.6663 48.6226 79.6663 48.2083C79.6663 47.794 79.5018 47.3966 79.2089 47.1036L74.5214 42.4161C74.2283 42.1232 73.831 41.9586 73.4167 41.9586C73.0024 41.9586 72.605 42.1232 72.312 42.4161L70.2917 44.4364L68.2714 42.4161C67.9784 42.1231 67.581 41.9584 67.1667 41.9583V38.3005L85.9167 30.2661V79.9911L67.1667 88.0271V77.8958H64.0417ZM73.8745 52.438L75.8948 54.4583L73.4167 56.9364L71.3964 54.9161C71.1033 54.6232 70.706 54.4586 70.2917 54.4586C69.8774 54.4586 69.48 54.6232 69.187 54.9161L67.1667 56.9364L64.6885 54.4583L66.7089 52.438C67.0018 52.145 67.1663 51.7476 67.1663 51.3333C67.1663 50.919 67.0018 50.5216 66.7089 50.2286L64.6885 48.2083L67.1667 45.7302L69.187 47.7505C69.48 48.0434 69.8774 48.208 70.2917 48.208C70.706 48.208 71.1033 48.0434 71.3964 47.7505L73.4167 45.7302L75.8948 48.2083L73.8745 50.2286C73.5816 50.5216 73.417 50.919 73.417 51.3333C73.417 51.7476 73.5816 52.145 73.8745 52.438ZM64.0417 32.0786V34.963L56.637 32.0021C57.1198 31.2552 57.6057 30.4911 58.0901 29.6989L64.0417 32.0786ZM49.9792 4.45831C52.879 4.46162 55.659 5.61502 57.7095 7.66549C59.76 9.71595 60.9134 12.496 60.9167 15.3958C60.9167 20.0693 53.8854 30.7755 49.9792 36.1974C46.0729 30.7755 39.0417 20.0693 39.0417 15.3958C39.045 12.496 40.1984 9.71595 42.2488 7.66549C44.2993 5.61502 47.0794 4.46162 49.9792 4.45831ZM39.2135 25.0318L35.9167 23.713V20.8286L37.5151 21.4693C38.0042 22.6271 38.5729 23.8224 39.2135 25.0318ZM7.79167 29.0224L32.7917 20.688V23.6771L11.9542 31.113C11.6508 31.2212 11.3882 31.4206 11.2025 31.6838C11.0168 31.947 10.9169 32.2612 10.9167 32.5833V84.1458C10.9165 84.3878 10.9726 84.6265 11.0804 84.8431C11.1883 85.0596 11.3449 85.2482 11.5381 85.394C11.7312 85.5397 11.9556 85.6386 12.1935 85.6828C12.4313 85.7271 12.6762 85.7155 12.9089 85.6489L32.7917 79.9677V83.0208L7.79167 91.3521V29.0224ZM92.1667 84.6474L67.1667 94.3614V91.4255L88.0948 82.4567C88.3758 82.3363 88.6153 82.136 88.7836 81.8808C88.9519 81.6256 89.0416 81.3265 89.0417 81.0208V27.8958C89.0416 27.6371 88.9774 27.3825 88.8546 27.1548C88.7319 26.9271 88.5546 26.7334 88.3385 26.5911C88.1233 26.4475 87.8755 26.3602 87.6178 26.3373C87.3601 26.3144 87.1007 26.3565 86.8635 26.4599L67.1667 34.9021V32.0896L92.1667 22.3677V84.6474Z"
                  />
                  <path
                    d="M17.4203 74.2578C17.5602 74.4847 17.7559 74.6719 17.9886 74.8019C18.2214 74.9318 18.4835 75 18.75 75H28.125C28.3914 75.0001 28.6533 74.9322 28.886 74.8025C29.1188 74.6729 29.3145 74.486 29.4546 74.2594C29.5947 74.0329 29.6746 73.7743 29.6866 73.5082C29.6987 73.2421 29.6425 72.9773 29.5234 72.7391L24.8359 63.3641C24.6916 63.1219 24.4868 62.9214 24.2416 62.7822C23.9965 62.6429 23.7194 62.5697 23.4375 62.5697C23.1556 62.5697 22.8785 62.6429 22.6333 62.7822C22.3882 62.9214 22.1834 63.1219 22.0391 63.3641L17.3516 72.7391C17.2328 72.9771 17.1767 73.2416 17.1888 73.5074C17.2008 73.7731 17.2805 74.0315 17.4203 74.2578ZM23.4375 67.5563L25.5969 71.875H21.2781L23.4375 67.5563Z"
                  />
                </svg>
              </div>
              <Button
                appearance="outlined"
                color="primary"
                iconRight={<span className="utds-icon-before-arrow-right" aria-hidden="true" />}
                onClick={() => null}
                className="mx-auto"
              >
                Learn more
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="events">
        <div className="events__content content-width m-auto p-spacing-xl">
          <h2 className="mb-spacing">Upcoming Events</h2>
          <TableWrapper>
            <Table className="table table--lines-x table--alt table--v-align-center table--full-width">
              <TableHead>
                <TableSortingRules defaultValue="date">
                  <TableSortingRule a11yLabel="Name" recordFieldPath="name" />
                  <TableSortingRule a11yLabel="Place" recordFieldPath="place" />
                  <TableSortingRule a11yLabel="Date" recordFieldPath="date" />
                </TableSortingRules>
                <TableHeadRow>
                  <TableHeadCell recordFieldPath="name" className="text-left">Name</TableHeadCell>
                  <TableHeadCell recordFieldPath="place" className="text-left">Place</TableHeadCell>
                  <TableHeadCell recordFieldPath="date" className="text-left">Date</TableHeadCell>
                </TableHeadRow>
              </TableHead>
              <TableBody>
                <TableBodyData records={eventsRecords} recordIdField="name">
                  <TableBodyDataRowTemplate>
                    <TableBodyDataCellTemplate recordFieldPath="name" />
                    <TableBodyDataCellTemplate recordFieldPath="place" />
                    <TableBodyDataCellTemplate recordFieldPath="date" />
                  </TableBodyDataRowTemplate>
                </TableBodyData>
              </TableBody>
            </Table>
          </TableWrapper>
          <Button
            appearance="outlined"
            color="primary"
            iconRight={<span className="utds-icon-before-arrow-right" aria-hidden="true" />}
            onClick={() => null}
            className="ml-auto mt-spacing"
          >
            See all events
          </Button>
        </div>
      </div>

      <div className="permits mb-spacing-xl">
        <div className="permits__content content-width m-auto p-spacing-xl">
          <div className="flex">
            <div className="flex-1">
              <h2 className="mb-spacing">Order a permit</h2>
              <p>
                Certain areas of Arches National Park require a reservation to manage visitor impact and
                preserve the natural environment. Please fill out the form below to check availability.
              </p>
              <div className="form--stacked">
                <ComboBox
                  id="hike"
                  label="Hike"
                  placeholder="Select a hike"
                  isClearable
                  labelClassName=" "
                  className="text-on-primary-color-light"
                >
                  <ComboBoxOption label="Delicate Arch Trail" value="delicate-arch">Delicate Arch</ComboBoxOption>
                  <ComboBoxOption label="Devils Garden Trail" value="devils-garden">Devils Garden</ComboBoxOption>
                  <ComboBoxOption label="Fiery Furnace" value="fiery-furnace">Fiery Furnace</ComboBoxOption>
                  <ComboBoxOption label="Tower Arch Trail" value="tower-arch">Tower Arch</ComboBoxOption>
                </ComboBox>
                <TextInput id="number-visitor" label="Number of visitors" />
                <DateInput
                  id="date-input-with-popup"
                  isDisabled={false}
                  label="Date"
                  value={visitors}
                  onChange={setVisitors}
                />
                <fieldset>
                  <legend>Will you be requiring a guide?</legend>
                  <RadioButton name="guide-required" id="yes" label="Yes" value="yes" />
                  <RadioButton name="guide-required" id="no" label="No" value="no" />
                </fieldset>
                <Button
                  appearance="outlined"
                  color="primary"
                  onClick={() => null}
                  className="ml-auto mt-spacing"
                >
                  Check
                </Button>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap justify-center items-center">
              <div className="permits__image" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex visit">
        <div className="content-width m-auto p-spacing-xl">
          <h2 className="mb-spacing">Visit Us</h2>
          <div className="flex justify-between flex-wrap">
            <div className="flex">
              <div>
                <svg width="50" height="50" viewBox="0 0 50 50">
                  <path
                    d="M25 49.2188C36.3898 49.2188 45.3125 45.4438 45.3125 40.625C45.3125 36.7422 39.6188 33.5031 31.0414 32.4125L37.2359 18.8625C37.9221 17.3551 38.2785 15.7187 38.2812 14.0625C38.2812 10.5401 36.882 7.16196 34.3913 4.67124C31.9005 2.18052 28.5224 0.78125 25 0.78125C21.4776 0.78125 18.0995 2.18052 15.6087 4.67124C13.118 7.16196 11.7188 10.5401 11.7188 14.0625C11.7217 15.7189 12.078 17.3556 12.7641 18.8633L18.9578 32.4117C10.3727 33.4992 4.6875 36.7312 4.6875 40.625C4.6875 45.4438 13.6102 49.2188 25 49.2188ZM13.2812 14.0625C13.2812 10.9545 14.5159 7.97378 16.7136 5.77609C18.9113 3.5784 21.892 2.34375 25 2.34375C28.108 2.34375 31.0887 3.5784 33.2864 5.77609C35.4841 7.97378 36.7187 10.9545 36.7188 14.0625C36.7163 15.4943 36.4084 16.9092 35.8156 18.2125L25 41.875L14.1844 18.2133C13.5916 16.9096 13.2838 15.4946 13.2812 14.0625ZM19.6398 33.9063L24.2898 44.0773C24.3522 44.2133 24.4522 44.3285 24.5781 44.4093C24.704 44.49 24.8504 44.533 25 44.533C25.1496 44.533 25.296 44.49 25.4219 44.4093C25.5478 44.3285 25.6478 44.2133 25.7102 44.0773L30.3602 33.9063C38.1492 34.807 43.75 37.5961 43.75 40.625C43.75 44.0211 36.2156 47.6562 25 47.6562C13.7844 47.6562 6.25 44.0211 6.25 40.625C6.25 37.6359 11.9586 34.8016 19.6398 33.9063Z"
                  />
                  <path
                    d="M25.7813 32.8126V22.6165C27.9836 22.4155 30.0237 21.3731 31.4771 19.7063C32.9306 18.0395 33.6855 15.8765 33.5849 13.6673C33.4842 11.4581 32.5358 9.37272 30.9368 7.84494C29.3379 6.31716 27.2115 5.4646 25 5.4646C22.7885 5.4646 20.6621 6.31716 19.0632 7.84494C17.4642 9.37272 16.5158 11.4581 16.4152 13.6673C16.3145 15.8765 17.0695 18.0395 18.5229 19.7063C19.9763 21.3731 22.0164 22.4155 24.2188 22.6165V32.8126H25.7813ZM17.9688 14.0626C17.9688 12.672 18.3811 11.3125 19.1537 10.1563C19.9263 8.99997 21.0245 8.09876 22.3093 7.56658C23.5941 7.0344 25.0078 6.89516 26.3717 7.16646C27.7357 7.43776 28.9885 8.10743 29.9719 9.09076C30.9552 10.0741 31.6249 11.327 31.8962 12.6909C32.1675 14.0548 32.0282 15.4686 31.496 16.7534C30.9639 18.0381 30.0626 19.1363 28.9064 19.9089C27.7501 20.6815 26.3907 21.0939 25 21.0939C23.1358 21.0918 21.3486 20.3503 20.0304 19.0322C18.7123 17.714 17.9708 15.9268 17.9688 14.0626Z"
                  />
                </svg>
              </div>
              <div>
                <ul>
                  <li className="font-bold">Address</li>
                  <li>5 miles north of Moab, Utah</li>
                  <li>on US 191</li>
                  <li>Moab, UT 84532</li>
                </ul>
              </div>
            </div>
            <div className="flex">
              <div>
                <svg width="50" height="50" viewBox="0 0 50 50">
                  <path
                    d="M25 0.78125C11.6461 0.78125 0.78125 11.6461 0.78125 25C0.78125 38.3547 11.6461 49.2188 25 49.2188C38.3539 49.2188 49.2188 38.3547 49.2188 25C49.2188 11.6461 38.3539 0.78125 25 0.78125ZM25 47.6562C12.507 47.6562 2.34375 37.4922 2.34375 25C2.34375 12.507 12.507 2.34375 25 2.34375C37.493 2.34375 47.6562 12.507 47.6562 25C47.6562 37.4922 37.493 47.6562 25 47.6562Z"
                  />
                  <path
                    d="M25 3.90625C13.3688 3.90625 3.90625 13.3688 3.90625 25C3.90625 36.6312 13.3688 46.0938 25 46.0938C36.6312 46.0938 46.0938 36.6312 46.0938 25C46.0938 13.3688 36.6312 3.90625 25 3.90625ZM25.7812 5.48828V8.59375H24.2188V5.48828C24.4781 5.47813 24.7383 5.46875 25 5.46875C25.2617 5.46875 25.5219 5.47813 25.7812 5.48828ZM5.46875 25C5.46875 24.7383 5.47813 24.4781 5.48828 24.2188H8.59375V25.7812H5.48828C5.47813 25.5219 5.46875 25.2617 5.46875 25ZM24.2188 44.5117V41.4062H25.7812V44.5117C25.5219 44.5219 25.2617 44.5312 25 44.5312C24.7383 44.5312 24.4781 44.5219 24.2188 44.5117ZM39.3438 38.2391L36.4898 35.3852L35.3852 36.4898L38.2391 39.3438C35.2969 42.0609 31.5211 43.8836 27.3438 44.3859V40.625C27.3438 40.193 26.9937 39.8438 26.5625 39.8438H23.4375C23.0063 39.8438 22.6562 40.193 22.6562 40.625V44.3859C18.4789 43.8836 14.7031 42.0609 11.7609 39.3438L14.6148 36.4898L13.5102 35.3852L10.6563 38.2391C7.93906 35.2969 6.11641 31.5211 5.61406 27.3438H9.375C9.80625 27.3438 10.1562 26.9945 10.1562 26.5625V23.4375C10.1562 23.0063 9.80625 22.6562 9.375 22.6562H5.61406C6.11641 18.4789 7.93906 14.7031 10.6563 11.7609L13.5102 14.6148L14.6148 13.5102L11.7609 10.6563C14.7031 7.93906 18.4789 6.11641 22.6562 5.61406V9.375C22.6562 9.80625 23.0063 10.1562 23.4375 10.1562H26.5625C26.9937 10.1562 27.3438 9.80625 27.3438 9.375V5.61406C31.5211 6.11641 35.2969 7.93906 38.2391 10.6563L35.3852 13.5102L36.4898 14.6148L39.3438 11.7609C42.0609 14.7023 43.8836 18.4781 44.3859 22.6562H40.625C40.1938 22.6562 39.8438 23.0063 39.8438 23.4375V26.5625C39.8438 26.9945 40.1938 27.3438 40.625 27.3438H44.3859C43.8836 31.5211 42.0609 35.2969 39.3438 38.2391ZM44.5312 25C44.5312 25.2617 44.5219 25.5219 44.5117 25.7812H41.4062V24.2188H44.5117C44.5219 24.4781 44.5312 24.7383 44.5312 25Z"
                  />
                  <path
                    d="M28.125 25C28.125 23.5484 27.125 22.3352 25.7812 21.9859V13.2812H24.2188V21.9859C22.875 22.3352 21.875 23.5484 21.875 25C21.875 26.7234 23.2766 28.125 25 28.125C25.5781 28.125 26.1125 27.957 26.5773 27.682L31.4789 32.5836L32.5836 31.4789L27.682 26.5773C27.957 26.1125 28.125 25.5781 28.125 25ZM23.4375 25C23.4375 24.1383 24.1383 23.4375 25 23.4375C25.8617 23.4375 26.5625 24.1383 26.5625 25C26.5625 25.8617 25.8617 26.5625 25 26.5625C24.1383 26.5625 23.4375 25.8617 23.4375 25Z"
                  />
                </svg>
              </div>
              <div>
                <ul>
                  <li className="font-bold">Hours</li>
                  <li>Summer: 7:30 AM - 6:00 PM</li>
                  <li>Winter: 9:00 AM - 4:00 PM</li>
                </ul>
              </div>
            </div>
            <div className="flex">
              <div>
                <svg width="50" height="50" viewBox="0 0 50 50">
                  <g>
                    <path
                      d="M32.5836 29.1352C32.4371 28.9888 32.2384 28.9065 32.0312 28.9065C31.8241 28.9065 31.6254 28.9888 31.4789 29.1352L28.4016 32.2126C28.0114 32.5853 27.4927 32.7932 26.9531 32.7932C26.4136 32.7932 25.8948 32.5853 25.5047 32.2126L17.7875 24.4954C17.4034 24.1112 17.1875 23.5902 17.1875 23.047C17.1875 22.5037 17.4034 21.9827 17.7875 21.5985L20.8648 18.5212C21.0113 18.3747 21.0936 18.176 21.0936 17.9688C21.0936 17.7617 21.0113 17.563 20.8648 17.4165L10.7086 7.26023C10.5621 7.11377 10.3634 7.03149 10.1562 7.03149C9.94908 7.03149 9.75041 7.11377 9.6039 7.26023L2.66718 14.197C2.06925 14.7949 1.59495 15.5047 1.27135 16.2859C0.947757 17.0672 0.781204 17.9045 0.781204 18.7501C0.781204 19.5957 0.947757 20.433 1.27135 21.2142C1.59495 21.9954 2.06925 22.7053 2.66718 23.3032L26.6969 47.3329C27.2948 47.9308 28.0046 48.4051 28.7859 48.7287C29.5671 49.0523 30.4044 49.2189 31.25 49.2189C32.0956 49.2189 32.9329 49.0523 33.7141 48.7287C34.4954 48.4051 35.2052 47.9308 35.8031 47.3329L42.7398 40.3962C42.8863 40.2497 42.9686 40.051 42.9686 39.8438C42.9686 39.6367 42.8863 39.438 42.7398 39.2915L32.5836 29.1352ZM10.1562 8.91726L19.2078 17.9688L17.9687 19.2079L8.91718 10.1563L10.1562 8.91726ZM34.6984 46.2282C33.7838 47.1427 32.5434 47.6564 31.25 47.6564C29.9566 47.6564 28.7162 47.1427 27.8016 46.2282L3.77187 22.1985C2.85741 21.2839 2.34369 20.0435 2.34369 18.7501C2.34369 17.4567 2.85741 16.2163 3.77187 15.3016L7.81249 11.261L16.8641 20.3126L16.6828 20.4938C16.3475 20.8291 16.0815 21.2271 15.9 21.6652C15.7185 22.1032 15.6251 22.5728 15.6251 23.047C15.6251 23.5211 15.7185 23.9907 15.9 24.4287C16.0815 24.8668 16.3475 25.2648 16.6828 25.6001L24.4 33.3173C24.7352 33.6526 25.1333 33.9186 25.5713 34.1001C26.0094 34.2816 26.4789 34.375 26.9531 34.375C27.4273 34.375 27.8968 34.2816 28.3349 34.1001C28.773 33.9186 29.171 33.6526 29.5062 33.3173L29.6875 33.136L38.7391 42.1876L34.6984 46.2282ZM39.8437 41.0829L30.7922 32.0313L32.0312 30.7923L41.0828 39.8438L39.8437 41.0829Z"
                    />
                    <path
                      d="M35.9375 0.78125C32.4163 0.785179 29.0404 2.18571 26.5506 4.67558C24.0607 7.16544 22.6602 10.5413 22.6562 14.0625C22.6528 16.7322 23.4615 19.3398 24.975 21.5391L23.4867 25.507C23.4339 25.6476 23.4226 25.8003 23.4543 25.9471C23.4861 26.0938 23.5594 26.2283 23.6655 26.3345C23.7717 26.4406 23.9062 26.5139 24.0529 26.5457C24.1997 26.5774 24.3524 26.5661 24.493 26.5133L28.4609 25.025C30.6602 26.5385 33.2678 27.3472 35.9375 27.3438C39.4599 27.3437 42.838 25.9445 45.3288 23.4538C47.8195 20.963 49.2187 17.5849 49.2187 14.0625C49.2187 10.5401 47.8195 7.16196 45.3288 4.67124C42.838 2.18052 39.4599 0.78125 35.9375 0.78125ZM35.9375 25.7812C33.4539 25.7832 31.0351 24.9892 29.0359 23.5156C28.9313 23.4391 28.8092 23.3898 28.6807 23.3722C28.5522 23.3546 28.4214 23.3692 28.3 23.4148L25.5539 24.4445L26.5836 21.6984C26.6292 21.577 26.6439 21.4462 26.6263 21.3177C26.6087 21.1892 26.5594 21.0672 26.4828 20.9625C24.9349 18.8354 24.1484 16.249 24.2502 13.6203C24.352 10.9916 25.3362 8.47375 27.044 6.47279C28.7519 4.47183 31.0838 3.10435 33.6639 2.59084C36.244 2.07734 38.9218 2.44773 41.2657 3.64231C43.6095 4.83688 45.4827 6.78601 46.5833 9.17543C47.6838 11.5648 47.9476 14.2553 47.3321 16.8129C46.7165 19.3706 45.2575 21.6464 43.1903 23.2735C41.1231 24.9005 38.5682 25.7839 35.9375 25.7812Z"
                    />
                    <path
                      d="M35.9375 5.46875C34.2378 5.46875 32.5763 5.97276 31.1631 6.91706C29.7498 7.86135 28.6484 9.20351 27.9979 10.7738C27.3475 12.3441 27.1773 14.072 27.5089 15.7391C27.8405 17.4061 28.6589 18.9373 29.8608 20.1392C31.0627 21.3411 32.5939 22.1595 34.2609 22.4911C35.928 22.8227 37.6559 22.6525 39.2262 22.0021C40.7965 21.3516 42.1387 20.2502 43.0829 18.8369C44.0272 17.4237 44.5313 15.7622 44.5313 14.0625C44.5286 11.7841 43.6223 9.59983 42.0112 7.98877C40.4002 6.37771 38.2159 5.47144 35.9375 5.46875ZM35.9375 21.0938C34.5469 21.0938 33.1874 20.6814 32.0311 19.9088C30.8749 19.1362 29.9737 18.038 29.4415 16.7532C28.9093 15.4685 28.7701 14.0547 29.0414 12.6908C29.3127 11.3268 29.9823 10.074 30.9657 9.09066C31.949 8.10732 33.2018 7.43766 34.5658 7.16635C35.9297 6.89505 37.3435 7.03429 38.6282 7.56647C39.913 8.09865 41.0112 8.99986 41.7838 10.1561C42.5564 11.3124 42.9688 12.6719 42.9688 14.0625C42.9665 15.9266 42.225 17.7137 40.9068 19.0318C39.5887 20.35 37.8016 21.0915 35.9375 21.0938Z"
                    />
                    <path
                      d="M35.9375 17.9688C35.5231 17.9688 35.1257 17.8041 34.8326 17.5111C34.5396 17.2181 34.375 16.8207 34.375 16.4062H32.8125C32.8125 17.2351 33.1417 18.0299 33.7278 18.616C34.3138 19.202 35.1087 19.5312 35.9375 19.5312C36.7663 19.5312 37.5612 19.202 38.1472 18.616C38.7333 18.0299 39.0625 17.2351 39.0625 16.4062H37.5C37.5 16.8207 37.3354 17.2181 37.0424 17.5111C36.7493 17.8041 36.3519 17.9688 35.9375 17.9688Z"
                    />
                    <path d="M32.0312 10.1562H33.5938V12.5H32.0312V10.1562Z" />
                    <path d="M38.2812 10.1562H39.8438V12.5H38.2812V10.1562Z" />
                  </g>
                  <defs>
                    <clipPath id="clip0_15_475">
                      <rect width="50" height="50" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div>
                <ul>
                  <li className="font-bold">Contact Information</li>
                  <li>Tel. <a href="tel:4357192299">(435) 719-2299</a></li>
                  <li>Email: <a href="mailto:email@utah.gov">email@utah.gov</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="faq flex">
        <div className="content-width m-auto p-spacing-xl">
          <div>
            <h2 className="mb-spacing">FAQ</h2>
          </div>
          <Accordion
            id="accordion-example-a"
            className="mb-spacing-l"
            headerClassName="primary-color-background white-color text-on-primary-color"
            headerContent="Is Arches National Park open all year?"
          >
            <p className="my-auto">
              Yes, Arches National Park is open all year, offering visitors the chance to explore its stunning landscapes in every season.
              However, some facilities and services may have reduced hours or availability during the winter months.
            </p>
          </Accordion>
          <Accordion
            id="accordion-example-b"
            className="mb-spacing-l"
            headerClassName="button button--secondary-color button--solid"
            headerContent="What are the other National Parks in Utah?"
          >
            <p className="my-auto">
              Utah is home to five stunning national parks, often referred to as the &quot;Mighty 5.&quot; These include:
            </p>
            <ul>
              <li><ExternalLink href="https://www.nps.gov/zion/index.htm">Zion National Park</ExternalLink></li>
              <li><ExternalLink href="https://www.nps.gov/brca/index.htm">Bryce Canyon National Park</ExternalLink></li>
              <li><ExternalLink href="https://home.nps.gov/care/index.htm">Capitol Reef National Park</ExternalLink></li>
              <li><ExternalLink href="https://www.nps.gov/cany/index.htm">Canyonlands National Park</ExternalLink></li>
              <li><ExternalLink href="https://www.nps.gov/arch/index.htm">Arches National Park</ExternalLink></li>
            </ul>
            <p className="my-auto">
              Each park offers unique landscapes and diverse outdoor activities.
            </p>
          </Accordion>
        </div>
      </div>

      <div className="news flex">
        <div className="content-width m-auto p-spacing-xl">
          <div>
            <h2 className="mb-spacing">News</h2>
          </div>
          <div className="flex gap">
            <div className="card flex-1">
              <img src={jeep} alt="Delicate Arch" className="card__image" />
              <div className=" p-spacing-xl">
                <div className="card__title">Driving through Arches</div>
                <p>
                  Embarking on an off-road adventure is an exhilarating way to explore rugged terrains and untouched landscapes.
                  This comprehensive guide will equip you with essential tips and techniques for driving off-road, ensuring you
                  navigate safely and confidently through the wildest trails.
                </p>
                <div className="flex justify-end">
                  <button type="button" className="button button--primary-color button--solid ml-spacing text-on-primary-color">
                    <span>See More</span>
                    <span className="button--icon button--icon-right"><span className="utds-icon-before-arrow-right" aria-hidden="true" /></span>
                  </button>
                </div>
              </div>
            </div>
            <div className="card flex-1">
              <img src={camping} alt="Delicate Arch" className="card__image" />
              <div className=" p-spacing-xl">
                <div className="card__title">Camping tips</div>
                <p>
                  Camping in the great outdoors is an adventure that brings you closer to nature, offering a unique opportunity to disconnect
                  and unwind. Whether you&apos;re a seasoned camper or a beginner, these essential tips will help you make the most of your
                  camping experience, ensuring safety, comfort, and unforgettable memories under the stars.
                </p>
                <div className="flex justify-end">
                  <button type="button" className="button button--primary-color button--solid ml-spacing text-on-primary-color">
                    <span>See More</span>
                    <span className="button--icon button--icon-right"><span className="utds-icon-before-arrow-right" aria-hidden="true" /></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
