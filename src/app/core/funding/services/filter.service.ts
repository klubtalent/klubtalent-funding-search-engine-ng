import {Injectable} from '@angular/core';
import {Funding} from '../model/funding.model';
import {SelectableSport} from "../model/selectable-sport.model";
import {SelectableType} from "../model/selectable-type.model";

/**
 * Handles filtering
 */
@Injectable({
  providedIn: 'root'
})
export class FilterService {

  /**
   * Filters a funding based on a list of criteria
   * @param funding funding
   * @param selectableSportsMap selectable sports map
   * @param selectableTypesMap selectable types map
   * @param volumeLimit volume limit
   */
  filterFunding(funding: Funding,
                selectableSportsMap = new Map<string, SelectableSport>(),
                selectableTypesMap = new Map<string, SelectableType>(),
                volumeLimit: number) {

    const matchesSport = this.checkSportMatch(funding, selectableSportsMap);
    const matchesType = this.checkTypeMatch(funding, selectableTypesMap);
    const matchesVolumeLimit = funding.volume >= volumeLimit;

    return matchesSport && matchesType && matchesVolumeLimit;
  }

  /**
   * Checks if the given funding contains any of the sports selected in the filter
   * @param funding funding
   * @param selectableSportsMap selectable sports map
   */
  private checkSportMatch(funding: Funding, selectableSportsMap: Map<string, SelectableSport>): boolean {
    let matchesSports = true;

    if (FilterService.isAnySportSelected(selectableSportsMap)) {
      matchesSports = funding.sports.some(sport => {
        return Array.from(selectableSportsMap.values()).some(selectableSport => {
          return selectableSport.selected && selectableSport.name === sport;
        });
      });
    }

    return matchesSports;
  }

  /**
   * Checks if the given funding contains any of the types selected in the filter
   * @param funding funding
   * @param selectableTypesMap selectable types map
   */
  private checkTypeMatch(funding: Funding, selectableTypesMap: Map<string, SelectableType>): boolean {
    let matchesTypes = true;

    if (FilterService.isAnyTypeSelected(selectableTypesMap)) {
      matchesTypes = funding.types.some(type => {
        return Array.from(selectableTypesMap.values()).some(selectableType => {
          return selectableType.selected && selectableType.name === type;
        });
      });
    }

    return matchesTypes;
  }

  //
  // Helpers
  //

  /**
   * Checks if any sport filter is set
   * @param selectableSportsMap selectable sports map
   */
  private static isAnySportSelected(selectableSportsMap: Map<string, SelectableSport>) {
    return Array.from(selectableSportsMap.values()).some(sport => {
      return sport.selected;
    });
  }

  /**
   * Checks if any sport filter is set
   * @param selectableTypesMap selectable types map
   */
  private static isAnyTypeSelected(selectableTypesMap: Map<string, SelectableType>) {
    return Array.from(selectableTypesMap.values()).some(type => {
      return type.selected;
    });
  }
}
