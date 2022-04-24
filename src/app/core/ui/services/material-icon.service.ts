import {Injectable} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';

/**
 * Represents icon topic subdirectory
 */
enum IconTopic {
    ACTION = 'action',
    ALERT = 'alert',
    AV = 'av',
    CONTENT = 'content',
    COMMUNICATION = 'communication',
    DEVICE = 'device',
    EDITOR = 'editor',
    FILE = 'file',
    HARDWARE = 'hardware',
    IMAGE = 'image',
    MAPS = 'maps',
    NAVIGATION = 'navigation',
    SOCIAL = 'social'
}

/**
 * Represents a material design icon
 */
class Icon {
    /** Topic */
    topic: IconTopic;
    /** Name */
    name: string;
    /** File */
    file: string;

    /**
     * Constructor
     * @param topic topic
     * @param name icon name
     * @param file icon file name
     */
    constructor(topic: IconTopic, name: string, file: string) {
        this.topic = topic;
        this.name = name;
        this.file = file;
    }
}

/**
 * Handles Material icons
 */
@Injectable({
    providedIn: 'root'
})
export class MaterialIconService {

    /** Root directory of material design icons */
    private ICON_ROOT_DIR = 'assets/material-design-icons';
    /** Icon variant */
    private VARIANT = 'production';
    /** List of icons */
    private icons: Icon[] = [
        // {topic: IconTopic.ACTION, name: 'search', file: 'ic_search_24px.svg'},
        // {topic: IconTopic.CONTENT, name: 'filter_list', file: 'ic_filter_list_24px.svg'},
        // {topic: IconTopic.IMAGE, name: 'flash_on', file: 'ic_flash_on_24px.svg'},
        // {topic: IconTopic.IMAGE, name: 'nature', file: 'ic_nature_24px.svg'},
        // {topic: IconTopic.IMAGE, name: 'nature_people', file: 'ic_nature_people_24px.svg'},
        // {topic: IconTopic.MAPS, name: 'local_dining', file: 'ic_local_dining_24px.svg'}
    ];

    /**
     * Initializes icons
     *
     * @param iconRegistry icon registry
     * @param sanitizer sanitizer
     */
    public initializeIcons(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
        this.icons.forEach(icon => {
            iconRegistry.addSvgIcon(icon.name,
                sanitizer.bypassSecurityTrustResourceUrl(this.ICON_ROOT_DIR + '/' + icon.topic + '/svg/' + this.VARIANT + '/' + icon.file));
        });
        iconRegistry.addSvgIcon('basketball', sanitizer.bypassSecurityTrustResourceUrl('assets/material-icons/basketball.svg'));
        iconRegistry.addSvgIcon('soccer', sanitizer.bypassSecurityTrustResourceUrl('assets/material-icons/soccer.svg'));
    }
}
